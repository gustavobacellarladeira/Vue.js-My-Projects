<template>
  <section class="section-c">
    <div class="title--c">
      <h5>Cadastro de Frigorifico</h5>
    </div>
    <div class="form-container">
      <div class="form-c-1">
        <b>Informação pessoal</b>
        <vs-input
          class="input-m"
          label-placeholder="CNPJ"
          v-model="formFrigorifico.cnpj"
        />
        <vs-input
          class="input-m"
          label-placeholder="Email"
          v-model="formFrigorifico.email"
        />
        <vs-input
          class="input-m"
          label-placeholder="Senha"
          v-model="formFrigorifico.senha"
        />
        <vs-input
          class="input-m"
          label-placeholder="Contato"
          v-model="formFrigorifico.contato"
        />
        <vs-input
          class="input-m"
          label-placeholder="Nome da propriedade"
          v-model="formFrigorifico.nomePropriedade"
        />
        <vs-input
          class="input-m"
          label-placeholder="Licença"
          v-model="formFrigorifico.licenca"
        />
        <vs-input
          class="input-m"
          label-placeholder="Informação Geral(opcional)"
          v-model="formFrigorifico.informacaoGeral"
        />
      </div>
      <div class="form-c-2">
        <b>Endereço</b>
        <vs-input
          class="input-m"
          label-placeholder="CEP"
          v-model="formFrigorifico.endereco.cep"
        />
        <vs-input
          class="input-m"
          label-placeholder="Rua"
          v-model="formFrigorifico.endereco.rua"
        />
        <vs-input
          class="input-m"
          label-placeholder="Número"
          v-model="formFrigorifico.endereco.numero"
        />
        <vs-input
          class="input-m"
          label-placeholder="Bairro"
          v-model="formFrigorifico.endereco.bairro"
        />
        <vs-input
          class="input-m"
          label-placeholder="Cidade"
          v-model="formFrigorifico.endereco.cidade"
        />
        <vs-input
          class="input-m"
          label-placeholder="Estado"
          v-model="formFrigorifico.endereco.estado"
        />
        <vs-input
          class="input-m"
          label-placeholder="Complemento"
          v-model="formFrigorifico.endereco.complemento"
        />
      </div>
    </div>
    <div>
      <div class="container-btn">
        <vs-button to="/escolhercadastro" color="danger" text-color="white"
          >Voltar</vs-button
        >
        <vs-button
          @click="cadastroFrigorifico"
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
      formFrigorifico: {
        cnpj: "",
        email: "",
        senha: "",
        contato: "",
        nomePropriedade: "",
        licenca: "",
        informacaoGeral: "",
        endereco: {
          cep: "",
          rua: "",
          numero: "",
          bairro: "",
          cidade: "",
          estado: "",
          complemento: "",
        },
      },
    };
  },
  methods: {
    async cadastroFrigorifico() {
      this.$vs.loading();
      try {
        await api
          .post("/frigorifico/cadastrar", this.formFrigorifico)
          .then((res) => {
            const user = "Frigorifico";
            localStorage.setItem("access_frigorifico", user);
            const token = res.cnpj;
            store.commit("SetToken", token);
            this.$router.push({ name: "FrigorificoHome" });
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
    justify-content: center;
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