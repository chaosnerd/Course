import Vue from 'vue'
import Router from 'vue-router'
import Course from './components/Course.vue'
import test from './components/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Course',
      component: Course
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})