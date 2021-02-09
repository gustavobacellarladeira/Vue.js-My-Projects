import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
import './assets/styles/grobal.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuesax)



router.beforeEach((to, from, next) => {
  document.title = `${to.name}`
  next()

})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
