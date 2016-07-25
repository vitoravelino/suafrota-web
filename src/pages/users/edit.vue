<template>
  <content-header title="Usuários" subtitle="Editar">
    <!-- <div slot="button-bar">
      <button class="btn btn-danger">
        <i class="fa fa-trash"></i>
        &nbsp; Remover usuário
      </button>
    </div> -->
  </content-header>

  <content-main>
    <div class="box box-primary">
      <div class="box-header">
        <button class="btn btn-default">
          <i class="fa fa-arrow-left"></i>
        </button>
        <button type="submit" class="btn btn-primary">
          <i class="fa fa-save"></i>
          &nbsp; Salvar
        </button>
        <button type="button" class="btn btn-default">
          <i class="fa fa-times"></i>
          &nbsp; Descartar mudanças
        </button>
        <button class="btn btn-danger">
          <i class="fa fa-trash"></i>
          &nbsp; Remover usuário
        </button>
      </div>

      <form role="form" novalidate @submit.prevent="onSubmit">
        <div class="box-body">
          <form-fields :user="user"></form-fields>
        </div>

        <!-- <div class="box-footer">
          <button type="submit" class="btn btn-primary">
            <i class="fa fa-save"></i>
            &nbsp; Salvar
          </button>
          <button type="submit" class="btn btn-default">
            <i class="fa fa-times"></i>
            &nbsp; Cancelar
          </button>
        </div> -->
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

    route: {
      activate({ to, next }) {
        UsersService.get(to.params.id).then((data) => {
          this.user = JSON.parse(data.body);
          next();
        });
      },
    },

    methods: {
      onSubmit() {
        UsersService.update(this.user).then((data) => {
          console.log('updated', data);
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
