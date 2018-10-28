import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App)
}).$mount('#app')
