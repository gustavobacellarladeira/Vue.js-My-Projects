<template>
  <div id="app">
    <vue-confirm-dialog></vue-confirm-dialog>

    <NavBar id="navbar" />
    <router-view class="main" id="main" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 15px;
  display: flex;
  flex-direction: column;
}
.alert11 {
  background: #2c3e50;
  color: gold;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
