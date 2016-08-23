<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->

    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>

      <validator name="validation">
        <form novalidate @submit.prevent="onSubmit">
          <div class="form-group has-feedback" :class="{'has-error': isEmailInvalid}">
            <input type="email" name="email" id="email" class="form-control" placeholder="Email" v-model="credentials.email" v-validate:email="[ 'email' ]">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            <span class="help-block" v-show="isEmailInvalid">Endereço de email inválido</span>
          </div>
          <div class="form-group has-feedback" :class="{'has-error': isPasswordInvalid}">
            <input type="password" name="password" id="password" class="form-control" placeholder="Password" v-model="credentials.password" v-validate:password="[ 'required' ]">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            <span class="help-block" v-show="isPasswordInvalid">Campo obrigatório</span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <icheck :checked.sync="remember"></icheck>
            </div> <!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div> <!-- /.col -->
          </div>
        </form>
      </validator>

      <div class="social-auth-links text-center">
        <p>- OR -</p>
      </div>
      <!-- /.social-auth-links -->

      <a href="#">I forgot my password</a><br>
      <a href="register.html" class="text-center">Register a new membership</a>

    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<script>
  import iCheck from 'modules/dashboard/components/icheck';

  import SessionsService from '../service';

  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        credentials: {},
        remember: false,
        isSubmitted: false,
      };
    },

    computed: {
      isEmailInvalid() {
        return this.$validation.email.email &&
              (this.$validation.email.dirty ||
               this.isSubmitted);
      },

      isPasswordInvalid() {
        return this.$validation.password.required &&
              (this.$validation.password.dirty ||
               this.isSubmitted);
      },
    },

    methods: {
      onSubmit() {
        this.isSubmitted = true;

        if (this.$validation.valid) {
          this.signIn(this.credentials).then(() => {
            this.$router.go(SessionsService.getPreviousURL() || '/');
          });
        }
      },

      ...mapActions(['signIn']),
    },

    components: {
      icheck: iCheck,
    },
  };
</script>
