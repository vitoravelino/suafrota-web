<template>
  <box class="box-primary">
    <box-header class="with-border">
      <a class="btn btn-default" title="Voltar p/ listar todos" role="button" v-link="{ path: '/customers' }">
        <i class="fa fa-arrow-left"></i>
      </a>
      <a class="btn btn-primary" role="button" title="Editar cliente" v-link="{ name: 'customerEdit', params: { id: customer.id } }">
        <i class="fa fa-edit"></i>
        &nbsp; Editar cliente
      </a>
      <button class="btn btn-danger pull-right" title="Remover cliente" @click.prevent="$emit('remove')">
        <i class="fa fa-trash"></i>
        &nbsp; Remover cliente
      </button>
    </box-header>

    <box-body>
      <strong>Razão social</strong>
      <p class="text-muted">
        {{ customer.name }}
      </p>

      <hr />

      <strong>Endereço</strong>
      <p class="text-muted">
        {{ customer.address }}
      </p>
    </box-body>
  </box>
</template>

<script>
  export default {
    props: ['customer'],
  };
</script>
