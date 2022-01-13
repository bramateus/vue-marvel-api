import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vueModal from 'vue-js-modal';
import router from './router.js'

Vue.config.productionTip = false

Vue.use(vueModal, { dynamicDefault: { draggable: true, resizable: true } })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
