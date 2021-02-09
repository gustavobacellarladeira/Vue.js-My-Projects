<template>
  <header>
    <nav class="nav-bar">
      <div class="nav-bar-img">
        <router-link to="/">
          <img src="../assets/logo.png" alt="" />
        </router-link>
      </div>
      <div class="nav-bar-btn">
        <vs-button
          v-if="!loggedIn"
          to="/sobrenos"
          class="nav-btn"
          color="white"
          text-color="black"
          type="filled"
          >Sobre Nós</vs-button
        >
        <vs-button
          v-if="!loggedIn"
          to="/escolhercadastro"
          class="nav-btn"
          color="white"
          text-color="black"
          type="filled"
          >Criar minha conta</vs-button
        >
        <vs-button
          v-if="!loggedIn"
          to="/login"
          class="nav-btn"
          color="white"
          text-color="black"
          type="filled"
          >Entrar</vs-button
        >

        <vs-button
          v-if="getFrigo"
          to="/perfilfrigorifico"
          class="nav-btn"
          color="white"
          text-color="black"
          type="filled"
          >Perfil</vs-button
        >

        <vs-button
          v-if="getPecu"
          to="/perfilpecuarista"
          class="nav-btn"
          color="white"
          text-color="black"
          type="filled"
          >Perfil</vs-button
        >

        <a v-if="loggedIn" @click="sair()" class="sair"> sair </a>
      </div>
    </nav>

    <b-navbar class="nav-mobile" toggleable type="dark">
      <b-navbar-brand to="/meusanimais">
        <img src="../assets/logo.png" alt=""
      /></b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link v-if="!loggedIn" to="/sobrenos"
              >Sobre Nós</router-link
            ></b-nav-item
          >

          <b-nav-item>
            <router-link v-if="!loggedIn" to="/escolhercadastro"
              >Criar minha conta</router-link
            ></b-nav-item
          >
          <b-nav-item>
            <router-link v-if="!loggedIn" to="/login"
              >Entrar</router-link
            ></b-nav-item
          >
          <!-- ROTAS PRIVADAS -->

          <b-nav-item>
            <router-link v-if="getFrigo" class="brancoo" to="/perfilfrigorifico"
              >Perfil</router-link
            ></b-nav-item
          >
          <b-nav-item>
            <router-link v-if="getPecu" class="brancoo" to="/perfilpecuarista"
              >Perfil</router-link
            ></b-nav-item
          >

          <b-nav-item>
            <a v-if="loggedIn" @click="sair()" class="sair sairmob">
              sair
            </a></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import store from "../store";
export default {
  computed: {
    loggedIn() {
      return store.getters.loggedIn;
    },
    getFrigo() {
      return store.getters.getFrigo;
    },
    getPecu() {
      return store.getters.getPecu;
    },
  },
  data() {
    return {};
  },

  methods: {
    sair() {
      this.$confirm({
        title: "Sair da página",
        message: `Você tem certeza que deseja fazer isso?`,
        button: {
          no: "Não",
          yes: "Sim",
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: (confirm) => {
          if (confirm) {
            this.$router.push({ name: "Logout" });
          }
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.brancoo {
  color: white;
}
.sair {
  color: white;
  font-size: 18px;
}

a:hover {
  text-decoration: none;
  cursor: pointer;
}
.nav-bar {
  padding: 0 50px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-bar img {
  padding: 18px;
}
.nav-bar-btn .nav-btn {
  margin: 0 30px;
  padding: 5px 20px;
}
.nav-mobile {
  display: none;
  background: #333;
}

@media only screen and (max-width: 959px) {
  .nav-bar-btn {
    display: none;
    margin: 0;
    padding: 0;
  }
  .nav-bar {
    display: none;
  }
  .nav-mobile {
    display: flex;
    align-items: center;
  }
  .nav-mobile a {
    color: white;
    margin: 5px;
    font-size: 20px;
  }
}
</style>
