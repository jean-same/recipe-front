import Vue from 'vue'
import App from './App.vue'
//import AppClick from './AppClick'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
