<template>
  <section class="container">
    <input v-model="teste" type="text" />
    <div>{{ teste }}</div>
    <button @click="nome()">mandar</button>
  
  </section>
</template>

<script>
import store from "@/store";
export default {

  data() {
    return {
      teste: store.state.nome,
      url: "https://github.com/rafaballerini.png",
      email: "dhasuhdas",
      password: "gustas"
    };
  },
  methods: {
    nome() {

      store.dispatch("getInput", {
        email: this.email,
        password: this.password
        });
    },

  
  },
};
</script>

<style >
.container {
}
</style>