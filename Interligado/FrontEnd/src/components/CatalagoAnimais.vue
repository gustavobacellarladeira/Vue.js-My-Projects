<template>
  <section>
    <!-- IMPORVISO -->
    <div class="filtro-frigo">
      <div class="filtro-c">
        <div class="filtro-c-inside">
          <div>Filtrar por:</div>
          <!--  INICIO SELECT -->
          <vs-select
            class="selectExample"
            label="Raça"
            v-model="filtroModel.raca"
          >
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in racaS"
            />
          </vs-select>
          <!--  FIM SELECT -->
          <!--  INICIO SELECT -->
          <vs-select
            class="selectExample"
            label="Sexo"
            v-model="filtroModel.sexo"
          >
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in sexoS"
            />
          </vs-select>
          <!--  FIM SELECT -->
          <!--  INICIO SELECT -->
          <vs-select
            class="selectExample"
            label="Idade"
            v-model="filtroModel.idade"
          >
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in idadeS"
            />
          </vs-select>
          <!--  FIM SELECT -->

          <!--  INICIO SELECT -->
          <vs-select
            class="selectExample"
            label="Sistema de Criação"
            v-model="filtroModel.sistemaCriacao"
          >
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in sistemaCriacaoS"
            />
          </vs-select>
          <!--  FIM SELECT -->
          <vs-button
            class="btn-filtro"
            line-origin="left"
            color="success"
            type="line"
            @click="filtrar"
            >Buscar</vs-button
          >
        </div>
      </div>
    </div>
    <!-- FIM DO FILTRO -->

    <!-- CARD -->
    <div class="card-container-cc">
      <div class="card--cc" v-for="(item, index) of lotes" :key="item.id">
        <div class="card-img">
          <img
            width="100%"
            src="https://images.pexels.com/photos/231062/pexels-photo-231062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="boi"
          />
        </div>
        <div class="card-title">
          <b> {{ item.quantidade }}-Cabeças</b> <b>{{ item.raca }}</b>
        </div>
        <div class="btn-container-card">
          <vs-button
            class="btncard"
            @click="popUp(index)"
            color="primary"
            type="filled"
            >Entre em contato</vs-button
          >
        </div>
      </div>
    </div>
    <!-- CARD -->
    <!-- POP UP -->
    <vs-popup v-if="esperadados" title="Lote" :active.sync="popupActivo">
      <div class="pop-container">
        <h3>
          {{ lotes[indexPopUp].raca }} -
          {{ lotes[indexPopUp].quantidade }} Cabeças
        </h3>
        <div class="popup-animal">
          <div class="text-popup">
            <ul>
              <li>Sexo: {{ lotes[indexPopUp].sexo }}</li>
              <li>Castrado: {{ lotes[indexPopUp].castrado }}</li>
              <li>Idade: {{ lotes[indexPopUp].idade }}</li>
              <li>Peso Estimado: {{ lotes[indexPopUp].pesoEstimado }}</li>

              <li>Sistema De Criação {{ lotes[indexPopUp].sistemaCriacao }}</li>
              <li>
                Informacoes Adicionais{{
                  lotes[indexPopUp].informacoesAdicionais
                }}
              </li>
            </ul>
          </div>
          <div class="card-img-pop">
            <img
              width="100%"
              src="https://images.pexels.com/photos/231062/pexels-photo-231062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="boi"
            />
          </div>
        </div>
        <!-- divisao dos contato e info -->
        <div>
          <router-link to="perfilpecuarista">
            <div class="popup-contato-con">
              <div class="popup-contatos">
                <div>
                  <span class="material-icons"> phone_forwarded </span>
                </div>
                <div>
                  <b>(35) 9 9999-9999</b>
                </div>
              </div>
              <div class="popup-contatos">
                <div>
                  <span class="material-icons"> email </span>
                </div>
                <div>
                  <b>interligado.agro@gmail.com </b>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </vs-popup>
    <!-- POP UP -->
  </section>
</template>

<script>
import api from "../services/index";

export default {
  async created() {
    await api.get("/loteAnimais/listar").then((res) => {
      console.log(res.data);
      this.lotes = res.data;
      this.esperadados = true;
    });
  },
  data() {
    return {
      // pop up
      popupActivo: false,
      // pop up
      // filto
      filtroModel: {
        raca: 0,
        sexo: "",
        idade: "",
        sistemaCriacao: "",
      },
      // filto
      // select options
      racaS: [
        { text: "Raça", value: 0 },
        { text: "Angus", value: "Angus" },
        { text: "Nelore", value: "Nelore" },
      ],
      sexoS: [
        { text: "Sexo", value: 0 },
        { text: "Macho", value: "Macho" },
        { text: "Fêmea", value: "Fêmea" },
      ],

      idadeS: [
        { text: "Idade", value: 0 },
        { text: "18 - 20 meses", value: "18 - 20 meses" },
        { text: "20 - 22 meses", value: "20 - 22 meses" },
        { text: "22 - 24 meses", value: "22 - 24 meses" },
        { text: "24 - 26 meses", value: "24 - 26 meses" },
        { text: "26 - 28 meses", value: "26 - 28 meses" },
        { text: "28 - 30 meses", value: "28 - 30 meses" },
        { text: "30 + meses", value: "30 + meses" },
      ],
      sistemaCriacaoS: [
        { text: "Sistema de Criacao", value: 0 },
        { text: "Intensivo", value: "Intensivo" },
        { text: "Semi-Intensivo", value: "Semi-Intensivo" },
        { text: "Extensivo", value: "Extensivo" },
      ],
      // select options
      lotes: [],
      indexPopUp: 0,
      esperadados: false,
    };
  },

  methods: {
    popUp(index) {
      console.log(index);
      this.indexPopUp = index;
      this.popupActivo = true;
    },
    async filtrar() {
      this.$vs.loading();
      await api.post("/loteAnimais/filtrar", this.filtroModel).then((res) => {
        this.lotes = res.data;
        console.log(res.data);
        this.$vs.loading.close();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.filtro-frigo {
  padding: 50px;
}
.filtro-c {
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 90%;
  margin: 0 auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #707070;
  opacity: 1;
  border-radius: 5px;
}
.filtro-c-inside {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
}

// card
.card-container-cc {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}
.card--cc {
  flex: 1;
  margin: 50px;
  text-align: start;
  font-size: 1.5em;
  min-width: 300px;
  max-width: 300px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  opacity: 1;
}
.card--cc:hover {
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid grey;
}

.card-title {
  padding: 20px 0 0 0;
  text-align: center;
  min-height: 100px;
}
.btn-container-card {
  padding: 20px;
}
.btn-container-card .btncard {
  font-size: 15px;
  padding: 8px;
}

// card

// pop Up
.pop-container {
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 50px 10px;
  text-align: center;
}
h3 {
  margin-bottom: 20px;
}
.popup-animal {
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 50px 20px;
}

.text-popup {
  padding: 10px;
}
.text-popup ul li {
  font-size: 15px;
  padding: 10px;
  font-weight: 600;
}
.card-img-pop {
  max-width: 200px;
  padding: 10px;
}
.card-img-pop img {
  border-radius: 5px;
}
.popup-contato-con {
  display: flex;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #000000;
  border-radius: 5px;
  opacity: 1;
}

.popup-contatos {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}
// pop Up
@media only screen and (max-width: 959px) {
  .filtro-c {
    width: 100%;
  }
  .filtro-c-inside {
    flex-direction: column;
  }
  .btn-filtro {
    padding: 30px 0;
    font-size: 20px;
  }
  // pop u
  .popup-contato-con {
    flex-direction: column;
  }
  .popup-contatos div {
    margin: 0 10px;
  }
  .popup-animal {
    flex-direction: column;
  }
}
</style>


 


    