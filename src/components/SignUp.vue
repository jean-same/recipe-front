<template>
  <div class="hello">
      <BreadCrumb breadCrumbProps="Inscrivez-vous"/>
        <div class="signup-form-section mt-150 mb-150">
                <div class="container">
                    <div class="row">
                        <div class="signup-form-container col-lg-6 mb-3 mb-lg-0">
                            <div class="signup-form">
                                <form @submit.prevent="handleSubmit">

                                    <div class="row mb-3">

                                        <div class="type col-sm-6">
                                            <p>
                                                <input type="text" v-model="pseudo" v-validate="'required'" placeholder="Votre pseudo" name="pseudo" id="pseudo">
                                            </p>
                                            <div
                                                v-if="emptyPseudo"
                                                class="empty-field"
                                                role="alert"
                                            >Pseudo obligatoire!</div>
                                        </div>


                                        <div class="role col-sm-6">
                                            <select class="form-select" v-model="selectedRole"  >
                                                <option selected>Choisir un role</option>
                                                <option value="ROLE_CHIEF">Cuisinier</option>
                                                <option value="ROLE_CONTRIBUTOR">Contributeur</option>
                                            </select>
                                            <div
                                            v-if="emptyRole"
                                            class="empty-field"
                                            role="alert"
                                            >
                                            Role obligatoire!
                                            </div>
                                        </div>

                                    </div>



                                    <p>
                                        <input type="email" v-model="email" v-validate="'required'" placeholder="Votre adresse email" name="email" id="email">
                                    </p>
                                    <div
                                        v-if="emptyEmail"
                                        class="empty-field"
                                        role="alert"
                                    >Email obligatoire!</div>
                                    <p>
                                        <input type="password" v-model="password" v-validate="'required'" placeholder="Votre mot de passe" name="password" id="password">
                                    </p>
                                    <div
                                        v-if="emptyPassword"
                                        class="empty-field"
                                        role="alert"
                                    >Mot de passe obligatoire!</div>
                                    <p class="text-center">Vous avez déjà un compte? <router-link to="/login">Connectez-vous</router-link> </p>
                                    <p><input :class="{ 'submit-disabled' : emptyPseudo || emptyEmail || emptyPassword }" type="submit" value="S'inscrire"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  </div>
</template>

<script>
import userService from '@/services/userService'
import alertService from '../services/alertService'


import BreadCrumb from './BreadCrumb.vue'

export default {
  name: 'SignUp',

components: {
    BreadCrumb
},

  data() {
    return {
      email: '',
      emptyEmail: false,
      pseudo: '',
      emptyPseudo: false,
      password: '',
      emptyPassword: false,
      emptyRole: false,
      selectedRole: 'Choisir un role'
    };
  },

    methods: {
       async handleSubmit() {

            this.pseudo == '' ? this.emptyPseudo = true : this.emptyPseudo = false
            this.selectedRole == 'Choisir un role' ? this.emptyRole = true : this.emptyRole = false
            this.email == '' ? this.emptyEmail = true : this.emptyEmail = false
            this.password == '' ? this.emptyPassword = true : this.emptyPassword = false

            if( !this.emptyPseudo && !this.emptyEmail && !this.emptyPassword && !this.emptyRole) {
                let data = {
                    "pseudo": this.pseudo,
                    "roles" : Array.of(this.selectedRole),
                    "email": this.email,
                    "password": this.password
                }

                await userService.create(data)
                .then(response => {
                    if(response.status == 201) {
                    alertService.alertSuccess("Votre compte a été crée")
                    this.$router.push('/login')
                }
                })
                .catch(err => {
                    console.log(err)
                })

            }
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.signup-form-container {
    margin: 0 auto;
}

.signup-form form p input[type=text] ,.signup-form form p input[type=password], .signup-form form p input[type=email], select {
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.signup-form input[type=submit] {
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

input[type="submit"] {
    background-color: #F28123;
    color: #051922;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    border: none !important;
    cursor: pointer;
    padding: 15px 25px;
    border-radius: 3px;
}

</style>
