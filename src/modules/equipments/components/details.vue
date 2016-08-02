<template>
  <div class="box box-primary">
    <div class="box-header with-border">
        <a class="btn btn-default" title="Voltar p/ listar todos" role="button" v-link="{ path: '/equipments' }">
          <i class="fa fa-arrow-left"></i>
        </a>
        <a class="btn btn-primary" role="button" title="Editar equipamento" v-link="{ name: 'equipmentEdit', params: { id: equipment.id } }">
          <i class="fa fa-edit"></i>
          &nbsp; Editar equipamento
        </a>
        <button class="btn btn-danger pull-right" title="Remover equipamento" @click.prevent="$emit('remove')">
          <i class="fa fa-trash"></i>
          &nbsp; Remover equipamento
        </button>
      </div>

    <div class="box-body">
      <strong>Modelo</strong>
      <p class="text-muted">
        {{ equipment.model }}
      </p>

      <hr />

      <strong>Serial</strong>
      <p class="text-muted">
        {{ equipment.serial }}
      </p>

      <hr />

      <strong>Veículo</strong>
      <p class="text-muted">
        {{ vehicle }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['equipment'],

    computed: {
      vehicle() {
        let output;

        if (this.equipment.vehicle_id) {
          output = `${this.equipment.vehicle.model} / ${this.equipment.vehicle.license_plate}`;
        } else {
          output = 'Nenhum';
        }

        return output;
      },
    },
  };
</script>
