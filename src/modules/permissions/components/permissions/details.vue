<template>
  <box class="box-primary">
    <box-header class="with-border">
      <a class="btn btn-default" title="Voltar p/ listar todos" role="button" v-link="{ path: '/users' }">
        <i class="fa fa-arrow-left"></i>
      </a>
      <a class="btn btn-primary" role="button" title="Editar usuário" v-link="{ name: 'userEdit', params: { id: user.id } }">
        <i class="fa fa-edit"></i>
        &nbsp; Editar usuário
      </a>
      <button class="btn btn-danger pull-right" title="Remover usuário" @click.prevent="$emit('remove')">
        <i class="fa fa-trash"></i>
        &nbsp; Remover usuário
      </button>
    </box-header>

    <box-body>
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

      <strong>Cliente</strong>
      <p class="text-muted">
        {{ user.customer_id }}
      </p>

      <hr />

      <strong>Perfil</strong>
      <p class="text-muted">
        {{ user.role_id }}
      </p>
    </box-body>
  </box>
</template>

<script>
  export default {
    props: ['user'],
  };
</script>
