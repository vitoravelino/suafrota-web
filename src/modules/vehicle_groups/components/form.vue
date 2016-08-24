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
            <input type="text" name="name" id="name" class="form-control" placeholder="Digite o nome" v-model="vehicleGroup.name" v-validate:name="['required']">
            <span class="help-block" v-show="isNameInvalid">Campo obrigatório</span>
          </div>
        </box-body>
      </form>
    </validator>
  </box>

  <div class="row">
    <div class="col-md-6">
      <box>
        <box-header class="with-border">
          <h4 class="box-title">Veículos</h4>
        </box-header>
        <box-body>
          <multiselect
            :options="vehicles"
            :selected="vehicleGroup.vehicles"
            :loading="isVehicleSearchLoading"
            :multiple="true"
            :custom-label="vehicleLabel"
            :limit="1"
            :clear-on-select="false"
            :close-on-select="false"
            @search-change="onSearchVehicle"
            @update="onVehicleUpdate"
            id="ajax"
            key="id"
            placeholder="Digite a placa do carro">
          </multiselect>

          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Placa</th>
                <th width="50"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vehicle in vehicleGroup.vehicles" track-by="$index">
                <td>{{ vehicle.model }}</td>
                <td>{{ vehicle.license_plate }}</td>
                <td>
                  <i class="fa fa-fw fa-trash" @click="onRemoveVehicle($index)"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </box-body>
      </box>
    </div>

    <div class="col-md-6">
      <box>
        <box-header class="with-border">
          <h4 class="box-title">Usuários</h4>
        </box-header>
        <box-body>
          <multiselect
            :options="users"
            :selected="vehicleGroup.users"
            :loading="isUserSearchLoading"
            :multiple="true"
            :custom-label="userLabel"
            :limit="1"
            :clear-on-select="false"
            :close-on-select="false"
            @search-change="onSearchUser"
            @update="onUserUpdate"
            key="id"
            placeholder="Digite o nome do usuário">
          </multiselect>

          <table class="table table-hover table-striped table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
                <th width="50"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in vehicleGroup.users" track-by="$index">
                <td>{{ user.name }}</td>
                <td>
                  <i class="fa fa-fw fa-trash" @click="onRemoveUser($index)"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </box-body>
      </box>
    </div>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  import VehiclesService from 'modules/vehicles/service';
  import UsersService from 'modules/users/service';

  export default {
    props: ['vehicleGroup', 'edit'],

    data() {
      return {
        isSubmitted: false,
        isVehicleSearchLoading: false,
        isUserSearchLoading: false,
        vehicles: [],
        users: [],
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

      // vehicles

      onRemoveVehicle(index) {
        // change to immutable
        this.vehicleGroup.vehicles.splice(index, 1);
      },

      onSearchVehicle(query) {
        this.isVehicleSearchLoading = true;

        VehiclesService.search({ license_plate: query }).then((response) => {
          const vehicles = response.json().data;

          this.vehicles = vehicles;
          this.isVehicleSearchLoading = false;
        });
      },

      onVehicleUpdate(vehicles) {
        this.vehicleGroup.vehicles = vehicles;
      },

      vehicleLabel(vehicle) {
        return `${vehicle.license_plate} (${vehicle.model})`;
      },

      // users

      onSearchUser(query) {
        this.isUserSearchLoading = true;

        UsersService.search({ name: query }).then((response) => {
          const users = response.json().data;

          this.users = users;
          this.isUserSearchLoading = false;
        });
      },

      onUserUpdate(users) {
        this.vehicleGroup.users = users;
      },

      onRemoveUser(index) {
        // change to immutable
        this.vehicleGroup.users.splice(index, 1);
      },

      userLabel(user) {
        return `${user.name} ${user.surname}`;
      },
    },

    components: {
      Multiselect,
    },
  };
</script>
