<template>
  <div>
    <box>
      <box-header class="with-border">
        <h4 class="box-title">Permissões do usuário</h4>
      </box-header>
      <box-body>
        <ul class="list-unstyled">
          <li v-for="permissionGroup in permissionGroups">
            <strong v-if="permissionGroup.permissions.count">{{ permissionGroup.name }}</strong>
            <ul class="list-unstyled" v-if="permissionGroup.permissions.count">
              <li v-for="permission in permissionGroup.permissions.data">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" v-model="user.permissions_ids" :value="permission.id" />
                    {{ permission.description }}
                  </label>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </box-body>
    </box>
  </div>
</template>

<script>
  export default {
    props: ['user', 'permissionGroups'],
  };
</script>
