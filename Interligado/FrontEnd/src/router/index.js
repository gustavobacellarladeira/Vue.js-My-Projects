import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    name: '404',
    path: '/404',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageNotFound.vue')
  },
  {
    path: '*',
    name: 'Notfound',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageNotFound.vue')
  },
  // auth start


  // inicio rotas de Visior



  {
    path: '/',
    name: 'Home',
    // meta: {
    //   requiresVisitor: true,
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },

  {
    path: '/login',
    name: 'Login',
    // meta: {
    //   requiresVisitor: true,
    // },

    component: () => import(/* webpackChunkName: "about" */ '../components/auth/Login')
  },
  {
    path: '/cadastrofrigorifico',
    name: 'CadastroFrigorifico',
    // meta: {
    //   requiresVisitor: true,
    // },

    component: () => import(/* webpackChunkName: "about" */ '../components/auth/CadastroFrigorifico.vue')
  },
  {
    path: '/cadastropecuarista',
    name: 'CadastroPecuarista',
    // meta: {
    //   requiresVisitor: true,
    // },

    component: () => import(/* webpackChunkName: "about" */ '../components/auth/CadastroPecuarista.vue')
  },
  {
    path: '/escolhercadastro',
    name: 'EscolherCadastro',
    // meta: {
    //   requiresVisitor: true,
    // },

    component: () => import(/* webpackChunkName: "about" */ '../components/EscolherCadastro.vue')
  },

  // fim rotas de Visitor


  {
    path: '/logout',
    name: 'Logout',
    // meta: {
    //   requiresAuth: true,
    // },

    component: () => import(/* webpackChunkName: "about" */ '../components/auth/Logout')
  },

  // auth end

  // FRIGORIFICO ROTA
  {
    path: '/frigorifico',
    name: 'FrigorificoHome',
    // meta: {
    //   requiresAuth: true,
    // },

    component: () => import(/* webpackChunkName: "about" */ '../views/FrigorificoHome.vue')
  },
  {
    path: '/perfilfrigorifico',
    name: 'PerfilFrigorifico',
    // meta: {
    //   requiresAuth: true,
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/PerfilFrigorifico.vue')
  },

  // FRIGORIFICO ROTA

  // PECUARISTA ROTA
  {
    path: '/pecuarista',
    name: 'PecuaristaHome',
    // meta: {
    //   requiresAuth: true,
    // },

    component: () => import(/* webpackChunkName: "about" */ '../views/PecuaristaHome.vue')
  },
  {
    path: '/perfilpecuarista',
    name: 'PerfilPecuarista',
    // meta: {
    //   requiresAuth: true,
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/PerfilPecuarista.vue')
  },
  {
    path: '/meusanimais',
    name: 'MeusAnimais',
    // meta: {
    //   requiresAuth: true,
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/MeusAnimais.vue')
  },
  // PECUARISTA ROTA



  {
    path: '/cadastraranimal',
    name: 'CadastrarAnimal',
    // meta: {
    //   requiresAuth: true,
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastrarAnimal.vue')
  },

  {
    path: '/sobrenos',
    name: 'SobreNos',

    component: () => import(/* webpackChunkName: "about" */ '../views/SobreNos.vue')
  },



]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
