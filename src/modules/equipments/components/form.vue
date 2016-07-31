<template>
  <div class="box box-primary">
    <validator name="validation">
      <form role="form" novalidate @submit.prevent="onSubmit">
        <div class="box-header with-border">
          <button type="button" class="btn btn-default" @click.prevent="emitBack">
            <i class="fa fa-arrow-left"></i>
          </button>
          <button type="submit" class="btn btn-primary">
            <i class="fa fa-save"></i>
            &nbsp; Salvar
          </button>
          <button type="button" class="btn btn-default" @click.prevent="emitBack" v-if="edit">
            <i class="fa fa-times"></i>
            &nbsp; Descartar mudanças
          </button>
          <button type="button" class="btn btn-default" @click.prevent="emitBack" v-if="!edit">
            <i class="fa fa-times"></i>
            &nbsp; Descartar
          </button>
          <button type="button "class="btn btn-danger pull-right" @click.prevent="emitRemove" v-if="edit">
            <i class="fa fa-trash"></i>
            &nbsp; Remover equipamento
          </button>
        </div>

        <div class="box-body">
          <div class="form-group" :class="{'has-error': isModelInvalid}">
            <label for="model">Modelo</label>
            <input type="text" name="model" id="model" class="form-control" placeholder="Digite o nome" v-model="equipment.model" v-validate:model="['required']">
            <span class="help-block" v-show="isModelInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group" :class="{'has-error': isSerialInvalid}">
            <label for="serial">Serial</label>
            <input type="text" name="serial" id="serial" class="form-control" placeholder="Digite o serial" v-model="equipment.serial" v-validate:serial="['required']">
            <span class="help-block" v-show="isSerialInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group">
            <label>Veículo</label>
            <multiselect
              placeholder="Modelo / ABC-1234"
              key="name"
              label="name"
              :options="[]"
              :selected="equipment.vehicle_id">
            </multiselect>
          </div>
      </form>
    </validator>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    props: ['equipment', 'edit'],

    data() {
      return {
        isSubmitted: false,
      };
    },

    computed: {
      isSerialInvalid() {
        return this.$validation.serial.required &&
              (this.$validation.serial.dirty ||
               this.isSubmitted);
      },
      isModelInvalid() {
        return this.$validation.model.required &&
              (this.$validation.model.dirty ||
               this.isSubmitted);
      },
    },

    methods: {
      onSubmit(e) {
        e.stopPropagation();
        this.isSubmitted = true;

        if (this.$validation.valid) {
          this.$emit('submit');
        }
      },

      emitBack() {
        this.$emit('back');
      },

      emitRemove() {
        // confirm()
        this.$emit('back');
      },
    },

    components: {
      Multiselect,
    },
  };
</script>
