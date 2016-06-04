import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

const router = new Router()

import App from './App'
import Dashboard from './components/pages/Dashboard/'
import ChartJs from './components/pages/Charts/ChartJs'

router.map({
  // '/login': {
  //   name: 'Login',
  //   component: Login
  // },
  '/dashboard': {
    name: 'Dashboard',
    component: Dashboard
  },
  '/charts/chartJs': {
    name: 'ChartJs',
    component: ChartJs
  }
})

// router.redirect({
//   '/': '/login'
// })

router.start(App, 'app')

/* eslint-disable no-new */
/*
new Vue({
  el: 'body',
  components: { App }
})
*/
