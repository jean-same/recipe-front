<template>
  <div class="hello">
      <BreadCrumb breadCrumbProps="Inscrivez-vous"/>
        <div class="signup-form-section mt-150 mb-150">
                <div class="container">
                    <div class="row">
                        <div class="signup-form-container col-lg-6 mb-3 mb-lg-0">
                            <div id="form_status">
                                <span class="wrong"
                                v-if="message"
                                >Identifiants incorects! </span>
                            </div>
                            <div class="signup-form">
                                <form @submit.prevent="handleSubmit">
                                    <p>
                                        <input type="text" v-model="pseudo" v-validate="'required'" placeholder="Votre pseudo" name="pseudo" id="pseudo">
                                    </p>
                                    <div
                                        v-if="emptyPseudo"
                                        class="empty-field"
                                        role="alert"
                                    >Pseudo obligatoire!</div>
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
      message: ''
    };
  },

    methods: {
        handleSubmit() {

            this.pseudo == '' ? this.emptyPseudo = true : this.emptyPseudo = false
            this.email == '' ? this.emptyEmail = true : this.emptyEmail = false
            this.password == '' ? this.emptyPassword = true : this.emptyPassword = false
            
        
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.signup-form-container {
    margin: 0 auto;
}

.signup-form form p input[type=text] ,.signup-form form p input[type=password], .signup-form form p input[type=email] {
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
