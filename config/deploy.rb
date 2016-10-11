# config valid only for current version of Capistrano
lock '3.6.1'

set :application, 'admin-browser'
set :scm, :git

set :deploy_to, '/home/user/www/app.suafrota.com'
set :release_id, `git log --pretty=format:'%h' -n 1 HEAD`
set :tarball_path, "/tmp/#{fetch(:application)}-#{fetch(:release_id)}.tar.gz"

# strategy

module TarballStrategy
  def check
    true
  end

  def test
    test! " [ -f #{fetch(:tarball_path)} ] "
  end

  def clone
    true
  end

  def update
    true
  end

  def release
    context.execute "tar -xf #{fetch(:tarball_path)} -C #{release_path}"
    context.execute :rm, fetch(:tarball_path)
  end

  def fetch_revision
    fetch(:release_id)
  end
end

set :git_strategy, TarballStrategy

# tasks

namespace :deploy do
  desc 'Build application for distribution'
  task :build do |task, args|
   `npm run build`
  end

  desc 'Create and upload project tarball'
  task :upload_tarball do |task, args|
    tarball_path = fetch(:tarball_path)
   `cd dist/; tar -czf #{tarball_path} .; cd ..`
    raise 'Error creating tarball.'if $? != 0

    on roles(:all) do
      upload! tarball_path, tarball_path
    end
  end

  # desc "Enable maintenance page"
  # task :enable_maintenance do
  #   on roles(:web) do
  #     if test("[ -f #{fetch(:deploy_to)}/current/public/503.html ]")
  #       execute :cp, "#{fetch(:deploy_to)}/current/public/503.html #{fetch(:deploy_to)}/current/public/maintenance.html"
  #     end
  #   end
  # end
end

# hooks

# before 'deploy:started', 'deploy:enable_maintenance'
before 'deploy:starting', 'deploy:build'
before 'deploy:updating', 'deploy:upload_tarball'
after 'deploy', 'deploy:cleanup'
