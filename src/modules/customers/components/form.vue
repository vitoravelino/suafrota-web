<template>
  <box class="box-primary">
    <validator name="validation">
      <form role="form" novalidate @submit.prevent="onSubmit">
        <form-header entity="cliente" :edit="edit" @remove="$emit('remove')"></form-header>

        <box-body>
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
            <label for="code">Código</label>
            <input type="text" name="code" id="code" class="form-control" placeholder="Digite o código" v-model="customer.code" v-validate:code="['customer_code']">
            <span class="help-block" v-show="isCodeInvalid">Código inválido (e.g.: ABC, DEF, etc)</span>
          </div>
        </box-body>
      </form>
    </validator>
  </box>
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
    },

    components: {
      Multiselect,
    },
  };
</script>
