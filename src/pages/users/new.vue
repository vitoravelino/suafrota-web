<template>
  <content-header title="Usuários" subtitle="Criar novo"></content-header>

  <content-main>
    <div class="box box-primary">
      <div class="box-header">
        <button class="btn btn-default">
          <i class="fa fa-arrow-left"></i>
        </button>
        <button type="submit" class="btn btn-primary">
          <i class="fa fa-save"></i>
          Salvar
        </button>
        <button type="button" class="btn btn-default">Descartar</button>
      </div>

      <form role="form" novalidate @submit.prevent="onSubmit">
        <div class="box-body">
          <form-fields :user="user"></form-fields>
        </div>
        <!-- /.box-body -->
      </form>
    </div>
  </content-main>
</template>

<script>
  import ContentHeader from '../../components/common/content/header';
  import ContentMain from '../../components/common/content/main';
  import FormFields from '../../components/users/form-fields';

  import UsersService from '../../services/users';

  export default {
    data() {
      return {
        user: {},
      };
    },

    methods: {
      onSubmit() {
        UsersService.save(this.user).then((data) => {
          console.log('created', data);
        });
      },
    },

    components: {
      ContentHeader,
      ContentMain,
      FormFields,
    },
  };
</script>
