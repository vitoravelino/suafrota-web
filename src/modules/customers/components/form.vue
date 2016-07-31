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
            &nbsp; Remover cliente
          </button>
        </div>

        <div class="box-body">
          <div class="form-group" :class="{'has-error': isNameInvalid}">
            <label for="name">Razão Social</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="Digite a razão social" v-model="customer.name" v-validate:name="['required']">
            <span class="help-block" v-show="isNameInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group" :class="{'has-error': isAddressInvalid}">
            <label for="address">Endereço</label>
            <input type="text" name="address" id="address" class="form-control" placeholder="Digite o endereço" v-model="customer.address" v-validate:address="['required']">
            <span class="help-block" v-show="isAddressInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group" :class="{'has-error': isCodeInvalid}">
            <label for="address">Código</label>
            <input type="text" name="address" id="address" class="form-control" placeholder="Digite o código" v-model="customer.address" v-validate:address="['customer_code']">
            <span class="help-block" v-show="isCodeInvalid">Código inválido (e.g.: ABC, DEF, etc)</span>
          </div>
      </form>
    </validator>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    props: ['customer', 'edit'],

    data() {
      return {
        isSubmitted: false,
      };
    },

    computed: {
      isNameInvalid() {
        return this.$validation.name.required &&
              (this.$validation.name.dirty ||
               this.isSubmitted);
      },

      isAddressInvalid() {
        return this.$validation.address.required &&
              (this.$validation.address.dirty ||
               this.isSubmitted);
      },

      isCodeInvalid() {
        return this.$validation.code.customer_code &&
              (this.$validation.code.dirty ||
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
