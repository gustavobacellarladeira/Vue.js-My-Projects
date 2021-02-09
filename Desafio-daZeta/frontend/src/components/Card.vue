<template>
  <div class="card">
    <div class="title">
      <h4>{{ nome }}</h4>
    </div>
    <div class="container-card">
      <div class="img-container">
        <img :src="url" alt="img" width="100%" height="100%" />
      </div>
      <div class="content-container">
        <p>
          {{ content }}
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="carrinho">
        <span class="material-icons icon"> add_shopping_cart </span> Adicionar
        ao carrinho
      </div>
      <vs-button @click="teste()" color="success" type="filled"
        >Pedir</vs-button
      >

      <div class="preco">
        <span class="material-icons icon"> monetization_on </span>{{ price }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    nome: String,
    price: String,
    content: String,
    url: String,
  },
  methods: {
    async teste() {
      const response = await axios.get("http://localhost:3020/pedidos");
      console.log(response.data);
      console.log(response.data.pedidos);
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding: 10px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: rgb(0, 0, 0) solid 1px;
}
.container-card {
  background-color: #ffffff;
  width: 100%;
  display: flex;
  color: rgb(0, 0, 0);
}
.img-container {
  padding: 10px;
  width: 50%;
  height: 400px;
}
.img-container img {
  border-radius: 10px;
}
.content-container {
  padding: 10px;
  width: 50%;
}
.icon {
  font-size: 40px;
  color: #50bb3b;
}

.card {
  border-radius: 10px;
  background-color: #0c163d;
  margin: 50px;
  width: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.747), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.footer {
  border-top: rgb(0, 0, 0) solid 1px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
}
.preco,
.carrinho {
  display: flex;
  align-items: center;
  margin: 5px;
  font-weight: bold;
  color: white;
}
@media screen and (max-width: 500px) {
  .card {
    width: 100%;
    margin: 30px;
  }
}
</style>