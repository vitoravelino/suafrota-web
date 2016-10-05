<template>
  <box class="box-primary">
    <validator name="validation">
      <form role="form" novalidate @submit.prevent="onSubmit">
        <form-header entity="permissão" :edit="edit" @remove="$emit('remove')"></form-header>

        <box-body>
          <div class="form-group" :class="{'has-error': isNameInvalid}">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="Digite o nome" v-model="permission.name" v-validate:name="['permission']">
            <span class="help-block" v-show="isNameInvalid">Campo inválido (e.g.: prefixo.acao)</span>
          </div>
          <div class="form-group" :class="{'has-error': isDescriptionInvalid}">
            <label for="description">Descrição</label>
            <input type="text" name="description" id="description" class="form-control" placeholder="Digite a descrição" v-model="permission.description" v-validate:description="['required']">
            <span class="help-block" v-show="isDescriptionInvalid">Campo obrigatório</span>
          </div>
        </box-body>
      </form>
    </validator>
  </box>
</template>

<script>
  export default {
    props: ['permission', 'edit'],

    data() {
      return {
        isSubmitted: false,
      };
    },

    computed: {
      isNameInvalid() {
        return this.$validation.name.permission &&
              (this.$validation.name.dirty ||
               this.isSubmitted);
      },

      isDescriptionInvalid() {
        return this.$validation.description.invalid &&
               (this.$validation.description.dirty ||
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
  };
</script>
