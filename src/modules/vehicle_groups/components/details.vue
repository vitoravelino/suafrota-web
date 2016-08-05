<template>
  <div class="box box-primary">
    <div class="box-header with-border">
        <a class="btn btn-default" title="Voltar p/ listar todos" role="button" v-link="{ path: '/vehicle_groups' }">
          <i class="fa fa-arrow-left"></i>
        </a>
        <a class="btn btn-primary" role="button" title="Editar grupo" v-link="{ name: 'vehicleGroupEdit', params: { id: vehicleGroup.id } }">
          <i class="fa fa-edit"></i>
          &nbsp; Editar grupo
        </a>
        <button class="btn btn-danger pull-right" title="Remover grupo" @click.prevent="$emit('remove')">
          <i class="fa fa-trash"></i>
          &nbsp; Remover grupo
        </button>
      </div>

    <div class="box-body">
      <strong>Modelo</strong>
      <p class="text-muted">
        {{ vehicleGroup.name }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['vehicleGroup'],
  };
</script>
