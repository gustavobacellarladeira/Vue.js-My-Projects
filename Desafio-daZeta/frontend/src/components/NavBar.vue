<template>
  <div>
    <vs-navbar color="#0C163D" text-color="#fff" class="nabarx">
      <div slot="title">
        <div class="logo">
          <router-link to="/">
            <img src="../assets/logo.png" class="portrait" alt=""
          /></router-link>
        </div>
      </div>
      <vs-navbar-item class="links-nav" index="5">
        <router-link to="/produtos">Produtos</router-link>
      </vs-navbar-item>
      <vs-navbar-item class="links-nav" index="4">
        <router-link to="/pedidos">Pedidos</router-link>
      </vs-navbar-item>
      <vs-navbar-item class="links-nav" index="3">
        <router-link to="/">Ínicio</router-link>
      </vs-navbar-item>
      <vs-navbar-item class="links-nav" index="2">
        <router-link to="/login">Área do cliente</router-link>
      </vs-navbar-item>
      <vs-navbar-item class="links-nav" index="1">
        <router-link to="/logout">Área do vendedor </router-link>
      </vs-navbar-item>
      <router-link to="/cart"
        ><span class="material-icons icon"> shopping_cart </span></router-link
      >
    </vs-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.vsnav-bar--header {
  color: white;
  background: white;
}
.vs-navbar--btn-responsive {
  color: white;
  background-color: white;
}
.logo {
  background: rgb(226, 107, 0);
  background: rgb(244, 197, 0);
  width: 50%;
  margin: 5px 0 5px 50px;
  border-radius: 10px;
}
.logo img {
  width: 100%;
}
.vs-navbar {
  color: white;
  border-bottom: rgb(226, 107, 0) solid 1px;
}
.vs-navbar a {
  font-weight: bold;
  font-size: 15px;
}
.vs-navbar a.router-link-exact-active {
  color: #e26b00;
}
.links-nav {
  margin-right: 50px;
}
.icon {
  font-size: 40px;
  color: #f4c500;
  margin-right: 50px;
}
</style>