import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VeeValidate from 'vee-validate'
import VueSweetalert2 from 'vue-sweetalert2'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'sweetalert2/dist/sweetalert2.min.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VeeValidate)


Vue.use(VueSweetalert2)

import './assets/css/main.css'
import router from './plugins/router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
