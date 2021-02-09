<template>
  <section class="section-c">
    <div class="title--c">
      <h5>Cadastro Pecuaristas</h5>
    </div>
    <div class="form-container">
      <div class="form-c-1">
        <b>Informação pessoal</b>
        <vs-input
          class="input-m"
          label-placeholder="CPF ou CNPJ"
          v-model="formPecuarista.cpf"
        />
        <vs-input
          class="input-m"
          label-placeholder="Nome"
          v-model="formPecuarista.nome"
        />

        <vs-input
          class="input-m"
          label-placeholder="Incrição"
          v-model="formPecuarista.inscricao"
        />
        <vs-input
          class="input-m"
          label-placeholder="Email"
          v-model="formPecuarista.email"
        />
        <vs-input
          class="input-m"
          label-placeholder="Senha"
          v-model="formPecuarista.senha"
        />
        <vs-input
          class="input-m"
          label-placeholder="Informaçoes complementares"
          v-model="formPecuarista.informacaoGeral"
        />
      </div>
      <div class="form-c-2">
        <b>Endereço</b>
        <vs-input
          class="input-m"
          label-placeholder="Nome da propriedade"
          v-model="formPecuarista.nomePropriedade"
        />

        <vs-input
          class="input-m"
          label-placeholder="Cep"
          v-model="formPecuarista.cep"
        />
        <vs-input
          class="input-m"
          label-placeholder="Referencia da localização"
          v-model="formPecuarista.referencia"
        />
        <vs-input
          class="input-m"
          label-placeholder="Numero de contato"
          v-model="formPecuarista.contato"
        />
      </div>
    </div>
    <div>
      <div class="container-btn">
        <vs-button to="/escolhercadastro" color="danger" text-color="white"
          >Voltar</vs-button
        >
        <vs-button
          @click="cadastroPecuarista"
          color="success"
          text-color="white"
          >Confirmar</vs-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import api from "../../services/index";
import store from "../../store/index";
export default {
  data() {
    return {
      formPecuarista: {
        cpf: "",
        nome: "",
        nomePropriedade: "",
        inscricao: "",
        cep: "",
        referencia: "",
        contato: "",
        email: "",
        senha: "",
        informacaoGeral: "",
      },
    };
  },
  methods: {
    async cadastroPecuarista() {
      try {
        await api
          .post("/pecuarista/cadastrar", this.formPecuarista)
          .then((res) => {
            const user = "Pecuarista";
            localStorage.setItem("access_pecuarista", user);
            const token = res.email;
            store.commit("SetToken", token);
            console.log(res);
            console.log(this.formFrigorifico);
            this.$router.push({ name: "PecuaristaHome" });
            this.$vs.loading.close();
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
b {
  margin: 10px;
}
.input-m {
  margin: 15px;
}
h5 {
  font-weight: bold;
  margin: 50px;
}
.section-c {
  padding: 0px 100px;
}
.form-container {
  width: 100%;
  display: flex;
}
.form-c-1 {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-c-2 {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-btn {
  margin: 0 auto;
  padding: 50px 0 100px 0;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media only screen and (max-width: 959px) {
  .form-container {
    flex-direction: column;
    align-items: center;
  }
  .container-btn {
    width: 100%;
    justify-content: space-between;
  }
  h5 {
    margin: 50px 0;
  }
}
</style>