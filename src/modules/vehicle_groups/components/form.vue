<template>
  <box class="box-primary">
    <validator name="validation">
      <form role="form" novalidate @submit.prevent="onSubmit">
        <form-header entity="grupo" :edit="edit" @remove="$emit('remove')"></form-header>

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
    <vehicles-selection-form
      class="col-md-6"
      :vehicle-group="vehicleGroup">
    </vehicles-selection-form>

    <users-selection-form
      class="col-md-6"
      :vehicle-group="vehicleGroup">
    </users-selection-form>
  </div>
</template>

<script>
  import VehiclesSelectionForm from './vehicles-selection-form';
  import UsersSelectionForm from './users-selection-form';

  export default {
    props: ['vehicleGroup', 'edit'],

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
    },

    components: {
      VehiclesSelectionForm,
      UsersSelectionForm,
    },
  };
</script>
