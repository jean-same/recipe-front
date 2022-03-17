<template>
        <div>
            <BreadCrumb breadCrumbProps="Connectez-vous"/>
            <div class="login-form-section mt-150 mb-150">
                <div class="container">
                    <div class="row">
                        <div class="login-form-container col-lg-6 mb-3 mb-lg-0">
                            <div id="form_status">
                                <span class="wrong"
                                v-if="fieldsEmpty"
                                >Les 2 champs sont obligatoires! </span>
                                <span class="wrong"
                                v-if="loginFailed"
                                >Identifiants incorects! </span>
                            </div>
                            <div class="login-form">
                                <form @submit="handleSubmit">
                                    <p>
                                        <input type="email" v-model="email" placeholder="Votre adresse email" name="email" id="email">
                                    </p>
                                    <p>
                                        <input type="password" v-model="password" placeholder="Votre mot de passe" name="password" id="password">
                                    </p>
                                    <p><input type="submit" value="Connexion"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import BreadCrumb from './BreadCrumb.vue'
import storage from "@/plugins/storage";
import userService from '../services/userService'

export default {
    name: 'LoginPage',

    components: {
        BreadCrumb
    },

    data() {
      return {
        email: '',
        password: '',
        fieldsEmpty: false,
        emailEmpty: false,
        passwordEmpty: false,
        loginFailed: false
      }
    },

    methods: {
        async handleSubmit(evt) {
            evt.preventDefault()

            if(this.email == '' || this.password == '') {
                this.fieldsEmpty = true
            }

            if( !this.fieldsEmpty ) {
                const userData = await userService.login(this.email , this.password)
                console.log(userData.data.token)
                              
              if(userData){
                  this.fieldsEmpty = false
                  storage.set('userData', userData.data);
                  userService.setHeaders(userData.data.token)
                  this.loginFailed = false;
                  this.$router.push('recettes');
              }
              else {
                  console.log('LOGIN FAILED');
                  this.loginFailed = true;
              }

            }
        }
    }

}
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

#form_status span {
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
