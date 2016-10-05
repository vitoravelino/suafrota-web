<template>
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
    <button type="button "class="btn btn-danger pull-right" @click.prevent="$emit('remove')" v-if="edit">
      <i class="fa fa-trash"></i>
      &nbsp; Remover {{* entity }}
    </button>
  </box-header>
</template>

<script>
  export default {
    props: ['edit', 'entity'],
  };
</script>
