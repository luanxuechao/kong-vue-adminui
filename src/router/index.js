import Vue from 'vue'
import Router from 'vue-router'
import Menus from '@/views/Menus'
import Service from '@/views/Service'
Vue.use(Router)
export default new Router({
    routes: [
      {
        path: '/',
        name: 'index',
        redirect:'/Service'
      },
      {
      path: '/Menus',
      name: 'Menus',
      component: Menus,
      children:[
        {
          path: '/Service',
          name: 'Service',
          component: Service,
        }
      ]
    },
    ]
  })
  