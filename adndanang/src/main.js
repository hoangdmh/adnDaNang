import Vue from 'vue'
import App from './App.vue'

import router from './router';

import VueMeta from 'vue-meta'

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

new Vue({
  el: '#app',
  router,
  VueMeta,
  render: h => h(App)
})
