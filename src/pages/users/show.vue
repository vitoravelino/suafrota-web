<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Quick Example</h3>
    </div>
    <!-- /.box-header -->

    <form role="form" novalidate @submit.prevent="onSubmit">
      <div class="box-body">
        <form-fields :user="user"></form-fields>
      </div>
      <!-- /.box-body -->

      <div class="box-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  import FormFields from '../../components/users/form-fields';

  import UsersService from '../../services/users';

  export default {
    components: {
      FormFields,
    },

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
  };
</script>
