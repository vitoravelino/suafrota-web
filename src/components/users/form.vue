<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Preencha o formulário abaixo</h3>
    </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form role="form">
      <div class="box-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Nome</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Digite o nome">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Sobrenome</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Digite o sobrenome">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Digite o email">
        </div>
        <div class="form-group">
          <label>Cliente</label>
          <select class="form-control">
            <option>Customer 1</option>
            <option>Customer 2</option>
          </select>
        </div>
        <div class="form-group">
          <label>Perfil</label>
          <select class="form-control">
            <option>Perfil 1</option>
            <option>Perfil 2</option>
          </select>
        </div>
      </div>
      <!-- /.box-body -->

      <div class="box-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
