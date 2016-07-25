<template>
  <div class="form-group">
    <label for="name">Nome</label>
    <input type="text" name="name" id="name" class="form-control" placeholder="Digite o nome" v-model="user.name">
  </div>
  <div class="form-group">
    <label for="surname">Sobrenome</label>
    <input type="text" name="surname" id="surname" class="form-control" placeholder="Digite o sobrenome" v-model="user.surname">
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" class="form-control" placeholder="Digite o email" v-model="user.email">
  </div>
  <div class="form-group">
    <label>Cliente</label>
    <select class="form-control" v-model="user.customer_id">
      <option value="1">Customer 1</option>
      <option value="2">Customer 2</option>
    </select>
  </div>
  <div class="form-group">
    <label>Perfil</label>
    <select class="form-control" v-model="user.role_id">
      <option value="1">Perfil 1</option>
      <option value="2">Perfil 2</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: ['user'],
  };
</script>
