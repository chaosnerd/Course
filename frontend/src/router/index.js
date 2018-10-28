import VueRouter from 'vue-router'

import login from '@/pages/login'
import homeIndex  from '@/pages/Home/index'
import homeHome  from '@/pages/Home/home'
import homeHome2 from '@/pages/Home/home2'
const routes = [
    { path: '/', component: homeIndex },
    { 
        path: '/home',
        component : homeIndex,
    }
  ]
  
const router = new VueRouter({
    routes // short for `routes: routes`
})
  
export default router