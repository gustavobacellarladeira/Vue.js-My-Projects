<template>
  <div class="a">
    <div class="pedidosQuantidade">
      <h1>Você tem {{ testeQuantidade }} pedidos</h1>
    </div>

    <div class="inputs">
      <vs-input type="number" v-model="idp" label="Id do produto" />
      <vs-input type="number" v-model="quant" label="Quantidade" />
      <vs-button @click="cadastro()" color="success" type="filled"
        >Cadastro</vs-button
      >
    </div>

    <div class="b">
      <div
        class="pedidos-container"
        v-for="item of todos"
        :key="item.id_pedidos"
      >
        <div class="pedidos">
          <div>
            Id-Pedidos:-----
            {{ item.id_pedidos }}
          </div>

          <div>Id-Produto:----- {{ item.id_produtos }}</div>
          <div>
            Quantidades:-----
            {{ item.quantidade }}
          </div>
        </div>
        <div class="footer-pedidos">
          <vs-button
            @click="deletar(item.id_pedidos)"
            color="danger"
            type="filled"
            >Excluir</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store";

export default {
  computed: {
    quantidade() {
      return store.getters.getquantidade;
    },
    pedidos() {
      return store.getters.getpedido;
    },
  },
  props: {
    nome: String,
    price: String,
    content: String,
    url: String,
  },
  mounted() {
    // store.dispatch("Setpedidos");
  },
  data() {
    return {
      todos: [],
      idp: "0",
      quant: "0",
      testeQuantidade: 0,
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3020/pedidos");
      this.todos = res.data.pedidos;
      this.testeQuantidade = res.data.quantidade;
      console.log(" RESPONSE.DATA", res.data);
      console.log(" RESPONSE.DATA.QUANTIDADE ", res.data.quantidade);
      // console.log(" RESPONSE.DATA.PEDIDOS ", res.data.pedidos);
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    async cadastro() {
      const response = await axios.post("http://localhost:3020/pedidos", {
        id_produtos: this.idp,
        quantidade: this.quant,
      });

      if (response.data.pedidoCriado) {
        const q = await axios.get("http://localhost:3020/pedidos");
        this.testeQuantidade = q.data.quantidade;

        this.todos = [...this.todos, response.data.pedidoCriado];

        this.$vs.notify({
          title: `Pedido nº: ${response.data.pedidoCriado.id_pedidos}`,
          text: response.data.mensagem,
          color: "success",
        });
        console.log(" Cadastro - res.data ", response.data);
        console.log(" Cadastro - res.data-pedido ", response.data.pedidoCriado);
        console.log(
          " Cadastro - res.data-pedido ",
          response.data.pedidoCriado.id_pedidos
        );
      } else {
        console.log(response.data.mensagem);
        this.$vs.notify({
          title: `Esse produto nao esta em nosso sistema!`,
          text: response.data.mensagem,
          color: "warning",
        });
      }
    },

    async deletar(e) {
      const data = {
        id_pedidos: e,
      };
      const response = await axios.delete("http://localhost:3020/pedidos", {
        data,
      });
      this.$vs.notify({
        title: `Pedido nº: ${data.id_pedidos}`,
        text: response.data.mensagem,
        color: "danger",
      });

      console.log(" DELETE", response.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.inputs {
  margin: 0 auto;
  border-radius: 10px;
  background: #c3c4cc;
  width: 30%;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
}

.a {
  min-height: 100vh;
}
.b {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.pedidos-container {
  margin: 0 auto;
  width: 100%;
  max-width: 30%;
  padding: 60px;
}
.pedidosQuantidade {
  margin: 50px;
}
.pedidos {
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #333;
  display: flex;
  flex-direction: column;
}
.pedidos div {
  margin: 30px;
}
.footer-pedidos {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  background: gold;
  margin-bottom: 50px;
}
.vs-button {
  margin: 20px;
}
</style>