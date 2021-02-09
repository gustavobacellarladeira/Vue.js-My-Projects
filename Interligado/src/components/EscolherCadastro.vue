<template>
  <section>
    <div class="container-Escolha">
      <div class="container-radio">
        <ul class="leftx">
          <li class="modelx"><h5>Cadastrar como</h5></li>
          <li>
            <vs-radio v-model="radios1" vs-name="radios1" vs-value="Frigorifico"
              >Frigorifico</vs-radio
            >
          </li>
          <li>
            <vs-radio v-model="radios1" vs-name="radios1" vs-value="Pecuarista"
              >Pecuarista</vs-radio
            >
          </li>
          <li>
            <p>Você está cadastrando como</p>
          </li>
          <li>
            <h6>{{ radios1 }}</h6>
          </li>
        </ul>
      </div>
      <div class="container-btn">
        <vs-button to="/" color="danger" text-color="white">Voltar</vs-button>
        <vs-button @click="confirmar" color="success" text-color="white"
          >Confirmar</vs-button
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      radios1: "Frigorifico",
    };
  },
  methods: {
    async confirmar() {
      const select = this.radios1;
      console.log(select);
      if (select === "Frigorifico") {
        this.$router.push({ name: "CadastroFrigorifico" });
      }
      if (select === "Pecuarista") {
        this.$router.push({ name: "CadastroPecuarista" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h6 {
  color: #e2c764;
  background: #333;
  padding: 20px;
  border-radius: 20px;
}
.container-Escolha {
  padding: 50px 0 0 0;
  display: flex;
  flex-direction: column;
}
.container-radio {
  margin: 0 auto;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid grey;
  border-radius: 20px;
}
.container-radio ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.container-btn {
  margin: 0 auto;
  padding: 50px 0 0 0;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media only screen and (max-width: 959px) {
  .container-radio {
    width: 90%;
  }
  .container-btn {
    width: 90%;
  }
}
</style>