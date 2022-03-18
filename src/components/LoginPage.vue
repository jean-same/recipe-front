<template>
        <div>
            <BreadCrumb breadCrumbProps="Connectez-vous"/>
            <div class="login-form-section mt-150 mb-150">
                <div class="container">
                    <div class="row">
                        <div class="login-form-container col-lg-6 mb-3 mb-lg-0">
                            <div id="form_status">
                                <span class="wrong"
                                v-if="message"
                                >Identifiants incorects! </span>
                            </div>
                            <div class="login-form">
                                <form @submit.prevent="handleLogin">
                                    <p>
                                        <input type="email" v-model="user.email" v-validate="'required'" placeholder="Votre adresse email" name="email" id="email">
                                    </p>
                                    <div
                                        v-if="errors.has('email')"
                                        class="empty-field"
                                        role="alert"
                                    >Email obligatoire!</div>
                                    <p>
                                        <input type="password" v-model="user.password" v-validate="'required'" placeholder="Votre mot de passe" name="password" id="password">
                                    </p>
                                    <div
                                        v-if="errors.has('password')"
                                        class="empty-field"
                                        role="alert"
                                    >Mot de passe obligatoire!</div>
                                    <p><input :class="{ 'submit-disabled' : errors.has('email') || errors.has('password') }" type="submit" value="Connexion"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>


import User from '../models/user';
import BreadCrumb from './BreadCrumb.vue'

export default {
  name: 'LoginPage',

    components: {
        BreadCrumb
    },

  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },

  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/recettes');
    }

  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
          console.log(isValid)
        if (!isValid) {
          this.loading = false;
          return;
        }
        if (this.user.email && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/recettes');
            },
            error => {
              this.loading = false;
              this.message = 'Identifiants incorrects'
               /* (error.response && error.response.data) ||
                error.message || */
                error.toString(); 
            }
          );
        }
      });
    }
  }
};

</script>

<style scoped lang="scss">

.login-form-container {
    margin: 0 auto;
}

.login-form form p input[type=password], .login-form form p input[type=email] {
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.login-form input[type=submit] {
    width: 100%;
    border-radius: 10px;
}

.submit-disabled {
    pointer-events: none;
    background: #ccc;
}

#form_status span, .empty-field {
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  background: #E74C3C;
  width: 100%;
  text-align: center;
  display: inline-block;
  padding: 10px 0px;
  border-radius: 3px;
  margin-bottom: 18px;
}

</style>
