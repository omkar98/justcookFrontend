import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuetifyConfirm from 'vuetify-confirm'
import './assets/sass/index.sass'

Vue.config.productionTip = false

Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'Accept',
  buttonFalseText: 'Discard',
  color: 'warning',
  icon: 'warning',
  title: '',
  width: 350,
  property: '$confirm'
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
