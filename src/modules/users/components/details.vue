<template>
  <div class="box box-primary">
    <div class="box-header with-border">
        <a class="btn btn-default" title="Voltar p/ listar todos" role="button" v-link="{ path: '/users' }">
          <i class="fa fa-arrow-left"></i>
        </a>
        <a class="btn btn-primary" role="button" title="Editar usuário" v-link="{ name: 'userEdit', params: { id: user.id } }" v-if="$auth.can('users.update')">
          <i class="fa fa-edit"></i>
          &nbsp; Editar usuário
        </a>
        <button class="btn btn-danger pull-right" title="Remover usuário" @click.prevent="$emit('remove')" v-if="$auth.can('users.destroy')">
          <i class="fa fa-trash"></i>
          &nbsp; Remover usuário
        </button>
      </div>

    <div class="box-body">
      <strong>Nome</strong>
      <p class="text-muted">
        {{ user.name }}
      </p>
      <hr />

      <strong>Sobrenome</strong>
      <p class="text-muted">
        {{ user.surname }}
      </p>

      <hr />

      <strong>Email</strong>
      <p class="text-muted">
        {{ user.email }}
      </p>

      <hr />

      <strong>Perfil</strong>
      <p class="text-muted">
        {{* role }}
      </p>

      <hr />

      <strong>Permissões</strong>
      <p class="text-muted">
        {{ user.permissions }}
      </p>
    </div>
  </div>
</template>

<script>
  import Roles from '../../users/roles';

  export default {
    props: ['user'],

    computed: {
      role() {
        return Roles.name(this.user.role);
      },
    },
  };
</script>
