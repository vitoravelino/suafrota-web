<template>
  <box class="box-primary">
    <validator name="validation">
      <form role="form" novalidate @submit.prevent="onSubmit">
        <box-header class="with-border">
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
            &nbsp; Remover veículo
          </button>
        </box-header>

        <box-body>
          <div class="form-group" :class="{'has-error': isModelInvalid}">
            <label for="model">Placa</label>
            <input type="text" name="model" id="model" class="form-control" placeholder="Digite o nome" v-model="vehicle.model" v-validate:model="['required']">
            <span class="help-block" v-show="isModelInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group" :class="{'has-error': isLicensePlateInvalid}">
            <label for="license-plate">Placa</label>
            <input type="text" name="license-plate" id="license-plate" class="form-control" placeholder="Digite a placa" v-model="vehicle.license_plate" v-validate:license_plate="['license_plate']">
            <span class="help-block" v-show="isLicensePlateInvalid">Placa inválida</span>
          </div>
          <div class="form-group" :class="{'has-error': isTypeInvalid}">
            <label>Tipo</label>
            <select class="form-control" v-model="vehicle.type" v-validate:type="[ 'required' ]">
              <option value="1">Tipo 1</option>
              <option value="2">Tipo 2</option>
            </select>
            <span class="help-block" v-show="isTypeInvalid">Campo obrigatório</span>
          </div>
        </box-body>
      </form>
    </validator>
  </box>
</template>

<script>
  export default {
    props: ['vehicle', 'edit'],

    data() {
      return {
        isSubmitted: false,
      };
    },

    computed: {
      isLicensePlateInvalid() {
        return this.$validation.license_plate.license_plate &&
              (this.$validation.license_plate.dirty ||
               this.isSubmitted);
      },
      isModelInvalid() {
        return this.$validation.model.required &&
              (this.$validation.model.dirty ||
               this.isSubmitted);
      },
      isTypeInvalid() {
        return this.$validation.type.required &&
              (this.$validation.type.dirty ||
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
  };
</script>
