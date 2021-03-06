<style lang="sass" scoped>
  .checkbox
    margin-top: 5px
    margin-bottom: 5px
</style>

<template>
  <div class="row">
    <div class="{{* formGridClass }}">
      <box class="box-primary">
        <validator name="validation">
          <form role="form" novalidate @submit.prevent="onSubmit">
            <form-header entity="usuário" :edit="edit" @remove="$emit('remove')"></form-header>

            <box-body>
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
              <div class="form-group" :class="{'has-error': isRoleInvalid}">
                <label>Perfil</label>
                <select class="form-control" v-model="user.role" v-validate:role="[ 'required' ]" :disabled="cannotAssignRole">
                  <option value="{{ key }}" v-for="(key, value) in roles">{{ value }}</option>
                </select>
                <span class="help-block" v-show="isRoleInvalid">Campo obrigatório</span>
              </div>
            </box-body>
          </form>
        </validator>
      </box> <!-- .box -->
    </div> <!-- .col-md-7 -->

    <permissions-form
      class="col-md-5"
      :user="user"
      :permission-groups="permissionGroups"
      v-if="$auth.can('users.assignPermissions')">
    </permissions-form>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import PermissionGroupsService from 'modules/permissions/services/permission-groups';
  import PermissionsForm from './permissions-form';

  import Roles from '../../users/roles';

  export default {
    props: {
      user: Object,
      isEdit: {
        default: false,
      },
      canEdit: {
        default: false,
      },
      canRemove: {
        default: false,
      },
    },

    data() {
      return {
        isSubmitted: false,
        roles: {},
        customers: [],
        permissionGroups: [],
      };
    },

    computed: {
      formGridClass() {
        return this.$auth.can('users.assignPermissions') ? 'col-md-7' : 'col-md-12';
      },

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

      isRoleInvalid() {
        return this.$validation.role.invalid &&
               (this.$validation.role.dirty ||
                this.isSubmitted);
      },

      cannotAssignRole() {
        const myself = this.user.id === this.currentUser.id;

        return myself || (!this.$auth.is('admin') && !this.$auth.is('manager'));
      },

      ...mapGetters(['currentUser']),
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

    created() {
      this.$set('roles', Roles.for(this.currentUser.role));

      if (this.$auth.can('users.assignPermissions')) {
        PermissionGroupsService.all().then((response) => {
          this.$set('permissionGroups', response.json().data);
        }).catch((response) => {
          console.log('What to do?', response);
        });
      }
    },

    components: {
      PermissionsForm,
    },
  };
</script>
