<template>
  <box class="box-primary">
    <box-header class="with-border">
      <a class="btn btn-default" title="Voltar p/ listar todos" role="button" v-link="{ path: '/vehicle_groups' }">
        <i class="fa fa-arrow-left"></i>
      </a>
      <a class="btn btn-primary" role="button" title="Editar grupo" v-link="{ name: 'vehicleGroupEdit', params: { id: vehicleGroup.id } }" v-if="$auth.can('vehicleGroups.update')">
        <i class="fa fa-edit"></i>
        &nbsp; Editar grupo
      </a>
      <button class="btn btn-danger pull-right" title="Remover grupo" @click.prevent="$emit('remove')" v-if="$auth.can('vehicleGroups.destroy')">
        <i class="fa fa-trash"></i>
        &nbsp; Remover grupo
      </button>
    </box-header>

    <box-body>
      <strong>Modelo</strong>
      <p class="text-muted">
        {{ vehicleGroup.name }}
      </p>

      <hr/>

      <strong>Usuários ({{ vehicleGroup.users.length }})</strong>
      <p class="text-muted">
        {{ users }}
      </p>

      <hr />

      <strong>Veículos ({{ vehicleGroup.vehicles.length }})</strong>
      <p class="text-muted">
        {{ vehicles }}
      </p>
    </box-body>
  </box>
</template>

<script>
  export default {
    props: ['vehicleGroup'],

    computed: {
      users() {
        return this.vehicleGroup.users.map((u) => `${u.name} ${u.surname}`).join(', ');
      },

      vehicles() {
        return this.vehicleGroup.vehicles.map((v) => `${v.model} ${v.license_plate}`).join(', ');
      },
    },
  };
</script>
