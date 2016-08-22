<template>
  <div class="box box-primary">
    <div class="box-header with-border">
        <a class="btn btn-default" title="Voltar p/ listar todos" role="button" v-link="{ path: '/vehicles' }">
          <i class="fa fa-arrow-left"></i>
        </a>
        <a class="btn btn-primary" role="button" title="Editar veículo" v-link="{ name: 'vehicleEdit', params: { id: vehicle.id } }" $auth.can('vehicles.update')>
          <i class="fa fa-edit"></i>
          &nbsp; Editar veículo
        </a>
        <button class="btn btn-danger pull-right" title="Remover veículo" @click.prevent="$emit('remove')" $auth.can('vehicles.destroy')>
          <i class="fa fa-trash"></i>
          &nbsp; Remover veículo
        </button>
      </div>

    <div class="box-body">
      <strong>Modelo</strong>
      <p class="text-muted">
        {{ vehicle.model }}
      </p>

      <hr />

      <strong>Placa</strong>
      <p class="text-muted">
        {{ vehicle.license_plate }}
      </p>

      <hr />

      <strong>Tipo</strong>
      <p class="text-muted">
        {{ vehicle.type }}
      </p>

      <hr />

      <strong>Equipamento</strong>
      <p class="text-muted">
        <a v-link="{ name: 'equipmentShow', params: { id: equipment.id }}" v-for="equipment in vehicle.equipments">{{ equipment.serial }}</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['vehicle'],

    computed: {
      equipments() {
        return this.vehicle.equipments.split(',');
      },
    },
  };
</script>
