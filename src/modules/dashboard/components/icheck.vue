<style lang="sass" scoped>
  .icheckbox_square-purple
    position: relative

  label:hover .icheckbox_square-purple:not(.checked)
    background-position: -24px 0

  .iCheck-helper
    position: absolute
    top: -20%
    left: -20%
    display: block
    width: 140%
    height: 140%
    margin: 0px
    padding: 0px
    background: rgb(255, 255, 255)
    border: 0px
    opacity: 0

  .checkbox-input
    position: absolute
    top: -20%
    left: -20%
    display: block
    width: 140%
    height: 140%
    margin: 0px
    padding: 0px
    background: rgb(255, 255, 255)
    border: 0px
    opacity: 0
</style>

<template>
  <div class="checkbox icheck">
    <label>
      <div class="icheckbox_square-blue" aria-checked="{{checked}}" aria-disabled="false" :class="{'checked': checked}">
        <input type="checkbox" class="checkbox-input" v-model="checked" />
        <ins class="iCheck-helper"></ins>
      </div>
      Remember Me
    </label>
  </div>
</template>

<script>
  export default {
    props: ['checked'],
  };
</script>
