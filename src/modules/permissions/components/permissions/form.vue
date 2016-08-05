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
            &nbsp; Remover permissão
          </button>
        </div>

        <div class="box-body">
          <div class="form-group" :class="{'has-error': isNameInvalid}">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="Digite o nome" v-model="permission.name" v-validate:name="['required']">
            <span class="help-block" v-show="isNameInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group" :class="{'has-error': isDescriptionInvalid}">
            <label for="description">Descrição</label>
            <input type="text" name="description" id="description" class="form-control" placeholder="Digite a descrição" v-model="permission.description" v-validate:description="['required']">
            <span class="help-block" v-show="isDescriptionInvalid">Campo obrigatório</span>
          </div>
        </div>
      </form>
    </validator>
  </div>
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
        return this.$validation.name.required &&
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
