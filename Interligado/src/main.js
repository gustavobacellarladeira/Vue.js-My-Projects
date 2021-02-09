import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import VueObserveVisibility from 'vue-observe-visibility'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueConfirmDialog from 'vue-confirm-dialog'


// Import CSS grobal
import './assets/styles/grobal.scss'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles


Vue.config.productionTip = false

Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuesax, {
  // options here
})

Vue.use(VueObserveVisibility)

router.beforeEach((to, from, next) => {
  document.title = `${to.name}`
  const loggedIn = store.getters.loggedIn
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresVisitor = to.matched.some(record => record.meta.requiresVisitor)


  if (requiresAuth) {
    // se nao estiver logado, va para a rota login
    if (!loggedIn) {
      next({
        name: 'Login',
      })
    } else {
      // senao, continue 
      next()
    }
  }
  else if (requiresVisitor) {
    // se  tiver em uma rota com reqvisitor
    // se estiver logado, va para / o inicio
    if (loggedIn) {
      next({
        name: "FrigorificoHome"
      })
    }
    else {
      // senao, continue 
      next()
    }
  }
  // se nd der certo, continue
  else {
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
