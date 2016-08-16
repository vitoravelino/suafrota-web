<style lang="sass" scoped>
  .checkbox
    margin-top: 5px
    margin-bottom: 5px
</style>

<template>
  <div class="row">
    <div class="col-md-7">
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
                  <option value="{{ customer.id }}" v-for="customer in customers">{{ customer.name }}</option>
                </select>
                <span class="help-block" v-show="isCustomerInvalid">Campo obrigatório</span>
              </div>
              <div class="form-group" :class="{'has-error': isRoleInvalid}">
                <label>Perfil</label>
                <select class="form-control" v-model="user.role" v-validate:role="[ 'required' ]">
                  <option value="{{ key }}" v-for="(key, value) in roles">{{ value }}</option>
                </select>
                <span class="help-block" v-show="isRoleInvalid">Campo obrigatório</span>
              </div>
            </div>
          </form>
        </validator>
      </div> <!-- .box -->
    </div> <!-- .col-md-7 -->

    <div class="col-md-5">
      <div class="box">
        <div class="box-header with-border">
          <h4 class="box-title">Permissões do usuário</h4>
        </div>
        <div class="box-body">
          {{ user | json  }}
          {{ permissions | json  }}
          <ul class="list-unstyled">
            <li v-for="permissionGroup in permissionGroups">
              <strong v-if="permissionGroup.permissions.count">{{ permissionGroup.name }}</strong>
              <ul class="list-unstyled" v-if="permissionGroup.permissions.count">
                <li v-for="permission in permissionGroup.permissions.data">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" v-model="permissions" :value="permission.id" />
                      {{ permission.description }}
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CustomersService from '../../customers/service';
  import PermissionGroupsService from '../../permissions/services/permission-groups';

  export default {
    props: ['user', 'edit'],

    data() {
      return {
        isSubmitted: false,
        roles: {
          admin: 'Administrador',
          manager: 'Gerente',
          user: 'Usuário',
        },
        customers: [],
        permissionGroups: [],
        permissions: [],
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
          this.$set('user.permissions', this.permissions);
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

    created() {
      const customersPromise = CustomersService.all();
      const permissionGroupsPromise = PermissionGroupsService.all();

      Promise.all([customersPromise, permissionGroupsPromise]).then((values) => {
        this.$set('customers', values[0].json().data);
        this.$set('permissionGroups', values[1].json().data);
      }).catch((response) => {
        console.log('What to do?', response);
      });
    },
  };
</script>
