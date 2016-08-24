<template>
  <box class="box-primary">
    <validator name="validation">
      <form role="form" novalidate @submit.prevent="onSubmit">
        <box-header class="with-border">
          <button type="button" class="btn btn-default" v-sf-back>
            <i class="fa fa-arrow-left"></i>
          </button>
          <button type="submit" class="btn btn-primary">
            <i class="fa fa-save"></i>
            &nbsp; Salvar
          </button>
          <button type="button" class="btn btn-default" v-if="edit" v-sf-back>
            <i class="fa fa-times"></i>
            &nbsp; Descartar mudanças
          </button>
          <button type="button" class="btn btn-default" v-if="!edit" v-sf-back>
            <i class="fa fa-times"></i>
            &nbsp; Descartar
          </button>
          <button type="button "class="btn btn-danger pull-right" @click.prevent="emitRemove" v-if="edit">
            <i class="fa fa-trash"></i>
            &nbsp; Remover grupo
          </button>
        </box-header>

        <box-body>
          <div class="form-group" :class="{'has-error': isNameInvalid}">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="Digite o nome" v-model="permissionGroup.name" v-validate:name="['required']">
            <span class="help-block" v-show="isNameInvalid">Campo obrigatório</span>
          </div>
        </box-body>
      </form>
    </validator>
  </box>
</template>

<script>
  export default {
    props: ['permissionGroup', 'edit'],

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
    },

    methods: {
      onSubmit(e) {
        e.stopPropagation();
        this.isSubmitted = true;

        if (this.$validation.valid) {
          this.$emit('submit');
        }
      },

      emitRemove() {
        // confirm()
        this.$emit('back');
      },
    },
  };
</script>
