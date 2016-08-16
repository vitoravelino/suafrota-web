<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <a class="btn btn-default" title="Voltar p/ listar todos" role="button" v-link="{ path: '/permission_groups' }">
        <i class="fa fa-arrow-left"></i>
      </a>
      <a class="btn btn-primary" role="button" title="Editar grupo" v-link="{ name: 'permissionGroupEdit', params: { id: permissionGroup.id } }">
        <i class="fa fa-edit"></i>
        &nbsp; Editar grupo
      </a>
      <button class="btn btn-danger pull-right" title="Remover grupo" @click.prevent="$emit('remove')">
        <i class="fa fa-trash"></i>
        &nbsp; Remover grupo
      </button>
    </div>

    <div class="box-body">
      <strong>Nome</strong>
      <p class="text-muted">
        {{ permissionGroup.name }}
      </p>
    </div>
  </div>
</template>

<script>
  import DataTable from '../../../common/components/data-table';

  export default {
    props: ['permissionGroup'],

    components: {
      DataTable,
    },
  };
</script>
