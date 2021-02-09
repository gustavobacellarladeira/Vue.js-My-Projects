<template>
  <section class="home-container">
    <Hero />
    <About />
    <div class="title">
      <h1>Alguns Hamburguers</h1>
    </div>
    <!-- produtos -->
    <div v-for="item of produtos" :key="item.id">
      <div class="cards">
        <Card
          :nome="item.nome"
          :price="item.price"
          :content="item.content"
          :url="item.url"
        />
      </div>
    </div>

    <!-- produtos -->
  </section>
</template>  

<script>
import Hero from "../components/Hero";
import Card from "../components/Card";
import About from "../components/About";

export default {
  components: {
    Hero,
    Card,
    About,
  },
  data() {
    return {
      produtos: [
        {
          id: 1,
          price: "15,90 R$",
          nome: "X-Monstro",
          content: "esse hamburguer e muito bom",
          url:
            "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 2,
          price: "15,90 R$",
          nome: "X-Monstro",
          content: "esse hamburguer e muito bom",
          url:
            "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 3,
          price: "15,90 R$",
          nome: "X-Monstro",
          content: "esse hamburguer e muito bom",
          url:
            "https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          id: 4,
          price: "15,90 R$",
          nome: "X-Monstro",
          content: "esse hamburguer e muito bom",
          url:
            "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
    };
  },
};
</script> 

<style lang="scss" scoped>
.home-container {
  background-color: #e26b00;
}
.title {
  width: 80%;
  margin: 0 auto;
  padding: 50px;
}
.title h1 {
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
}

.cards {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #e26b00;
}

@media screen and (max-width: 500px) {
}
</style>
