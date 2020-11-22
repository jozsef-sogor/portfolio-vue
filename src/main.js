import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition';
import VueParticles from 'vue-particles';
var VueCookie = require('vue-cookie');

Vue.use(VueParticles)
Vue.use(VuePageTransition)
Vue.use(VueCookie);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
