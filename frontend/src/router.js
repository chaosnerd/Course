import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import test from './components/test.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})