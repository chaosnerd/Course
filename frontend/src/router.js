import Vue from 'vue'
import Router from 'vue-router'
import Course from './components/Course.vue'
import test from './components/test.vue'
import Course_test from './components/Course_test.vue'

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
    },
    {
      path: '/Course_test',
      name: 'Course_test',
      component: Course_test
    }
  ]
})