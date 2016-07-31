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
            &nbsp; Remover usuário
          </button>
        </div>

        <div class="box-body">
          <div class="form-group" :class="{'has-error': isNameInvalid}">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="Digite o nome" v-model="user.name" v-validate:name="['required']">
            <span class="help-block" v-show="isNameInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group" :class="{'has-error': isSurnameInvalid}">
            <label for="surname">Sobrenome</label>
            <input type="text" name="surname" id="surname" class="form-control" placeholder="Digite o sobrenome" v-model="user.surname" v-validate:surname="['required']">
            <span class="help-block" v-show="isSurnameInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group" :class="{'has-error': isEmailInvalid}">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="form-control" placeholder="Digite o email" v-model="user.email" v-validate:email="[ 'email' ]">
            <span class="help-block" v-show="isEmailInvalid">Endereço de email inválido</span>
          </div>
          <div class="form-group" :class="{'has-error': isCustomerInvalid}">
            <label>Cliente</label>
            <select class="form-control" v-model="user.customer_id" v-validate:customer="[ 'required' ]">
              <option value="1">Customer 1</option>
              <option value="2">Customer 2</option>
            </select>
            <span class="help-block" v-show="isCustomerInvalid">Campo obrigatório</span>
          </div>
          <div class="form-group" :class="{'has-error': isRoleInvalid}">
            <label>Perfil</label>
            <select class="form-control" v-model="user.role_id" v-validate:role="[ 'required' ]">
              <option value="1">Perfil 1</option>
              <option value="2">Perfil 2</option>
            </select>
            <span class="help-block" v-show="isRoleInvalid">Campo obrigatório</span>
          </div>
        </div>
      </form>
    </validator>
  </div>
</template>

<script>
  export default {
    props: ['user', 'edit'],

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

      isSurnameInvalid() {
        return this.$validation.surname.invalid &&
               (this.$validation.surname.dirty ||
                this.isSubmitted);
      },

      isEmailInvalid() {
        return this.$validation.email.invalid &&
               (this.$validation.email.dirty ||
                this.isSubmitted);
      },

      isCustomerInvalid() {
        return this.$validation.customer.invalid &&
               (this.$validation.customer.dirty ||
                this.isSubmitted);
      },

      isRoleInvalid() {
        return this.$validation.role.invalid &&
               (this.$validation.role.dirty ||
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
