import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'
Vue.prototype.$url = 'http://127.0.0.1:3333/api'
new Vue({
  router,
  render : h => h(App),
}).$mount('#app')