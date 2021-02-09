<template>
  <section>
    <!-- titulo da pagina -->

    <div class="title-frigo">
      <b>Cadastrar Lote</b>
    </div>
    <!-- titulo da pagina -->

    <!-- Formulario de cadastro -->
    <form>
      <!-- Container dos input e img -->
      <div class="cadastro-main">
        <div class="cadastro-input">
          <!-- Inputs -->
          <div>
            <vs-select
              label="Raça"
              placeholder="Raça"
              width="100%"
              v-model="form.raca"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in racaS"
              />
            </vs-select>
          </div>
          <div>
            <vs-select
              label="Sexo"
              placeholder="Sexo"
              class="selectExample"
              width="100%"
              v-model="form.sexo"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in sexoS"
              />
            </vs-select>
          </div>
          <div>
            <vs-select
              label="Castrado (se macho)"
              placeholder="Castrado"
              class="selectExample"
              width="100%"
              v-model="form.castrado"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in castradoS"
              />
            </vs-select>
          </div>
          <div>
            <vs-select
              label="Idade (meses)"
              placeholder="Idade"
              class="selectExample"
              width="100%"
              v-model="form.idade"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in idadeS"
              />
            </vs-select>
          </div>
          <div>
            <vs-select
              label="Sistema de Criação"
              placeholder="Sistema de Criação"
              class="selectExample"
              width="100%"
              v-model="form.sistemaCriacao"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in SistemaCriacaoS"
              />
            </vs-select>
          </div>

          <div>
            <vs-input
              label="Peso estimado (arrobas)"
              class="input"
              placeholder="Peso estimado"
              v-model="form.pesoEstimado"
            />

            <vs-input
              label="Quantidade (Cabeças)"
              class="input"
              placeholder="Quantidade"
              v-model="form.quantidade"
            />
            <vs-textarea
              counter="200"
              label="Informaçoes Gerais (Opcional)"
              :counter-danger.sync="counterDanger"
              v-model="form.informacoesAdicionais"
            />
          </div>
        </div>
        <!-- Inputs -->
        <!-- cadastro de img -->
        <div class="cadastro-img">
          <vs-input size="large" type="file" class="input input-img" />
        </div>
        <!-- cadastro de img -->
      </div>
      <!-- Container dos input e img -->

      <!-- Container Botao do submit -->
      <div class="cadastro-btn">
        <vs-button class="osbtn" to="/meusanimais" color="#5A6268"
          >Voltar</vs-button
        >
        <vs-button class="osbtn" @click="submit()" color="#218838"
          >Cadastrar</vs-button
        >
      </div>
      <!-- Container Botao do submit -->
    </form>
    <!-- {{ an }} -->
    <!-- Formulario de cadastro -->
  </section>
</template>

<script>
import api from "../services/index";
export default {
  data() {
    return {
      counterDanger: false,
      // model form
      form: {
        raca: 0,
        sexo: 0,
        castrado: 0,
        idade: 0,
        sistemaCriacao: 0,
        pesoEstimado: "",
        quantidade: "",
        informacoesAdicionais: "",
      },

      // model form
      // select

      racaS: [
        { text: "Angus", value: "Angus" },
        { text: "Nelore", value: "Nelore" },
      ],
      sexoS: [
        { text: "Macho", value: "Macho" },
        { text: "Fêmea", value: "Fêmea" },
      ],
      castradoS: [
        { text: "Sim", value: "Sim" },
        { text: "Não", value: "Não" },
      ],
      idadeS: [
        { text: "18 - 20 meses", value: "18 - 20 meses" },
        { text: "20 - 22 meses", value: "20 - 22 meses" },
        { text: "22 - 24 meses", value: "22 - 24 meses" },
        { text: "24 - 26 meses", value: "24 - 26 meses" },
        { text: "26 - 28 meses", value: "26 - 28 meses" },
        { text: "28 - 30 meses", value: "28 - 30 meses" },
        { text: "30 + meses", value: "30 + meses" },
      ],
      SistemaCriacaoS: [
        { text: "Intensivo", value: "Intensivo" },
        { text: "Semi-Intensivo", value: "Semi-Intensivo" },
        { text: "Extensivo", value: "Extensivo" },
      ],
    };
  },

  methods: {
    async submit() {
      const res = await api.post("/loteAnimais/cadastrar", this.form);
      this.$router.push({ name: "MeusAnimais" });
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
.title-frigo {
  background-color: #86c695;
  border-bottom: 4px solid #218838;
  font-size: 30px;
  padding: 20px;
  color: black;
}
form {
  width: 100%;
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cadastro-main {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.cadastro-input {
  padding: 20px;
}
.cadastro-input div {
  margin: 20px 0 20px 0px;
}
.selectExample {
  box-shadow: 0 5px 6px -6px black;
}

.input {
  width: 60%;
  box-shadow: 0 5px 6px -6px black;
}

.cadastro-img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-img {
  width: 100%;
}
.cadastro-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 60px 0 140px 0;
}
.osbtn {
}

@media screen and (max-width: 500px) {
  .cadastro-main {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .cadastro-input {
    width: 80%;
  }
}
</style>
