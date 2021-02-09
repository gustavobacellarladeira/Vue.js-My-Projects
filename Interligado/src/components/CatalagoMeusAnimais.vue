<template>
  <section>
    <div class="filtro-frigo">
      <div class="filtro-c">
        <div class="filtro-c-inside">
          <div>Filtrar por:</div>
          <!--  INICIO SELECT -->
          <vs-select class="selectExample" label="Raça" v-model="racaSelect">
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in racaOptions"
            />
          </vs-select>
          <!--  FIM SELECT -->
          <!--  INICIO SELECT -->
          <vs-select class="selectExample" label="Sexo" v-model="sexoSelect">
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in sexo"
            />
          </vs-select>
          <!--  FIM SELECT -->
          <!--  INICIO SELECT -->
          <vs-select class="selectExample" label="Idade" v-model="idadeSelect">
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in idade"
            />
          </vs-select>
          <!--  FIM SELECT -->

          <!--  INICIO SELECT -->
          <vs-select
            class="selectExample"
            label="Sistema de Criação"
            v-model="SistemaSelect"
          >
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in sistemaCriacao"
            />
          </vs-select>
          <!--  FIM SELECT -->
          <vs-button
            line-origin="left"
            color="success"
            type="line"
            class="btn-filtro"
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
          <b>{{ item.quantidade }}</b> <b>{{ item.raca }}</b>
        </div>
        <div class="btn-container-card">
          <div class="animal--c--btn">
            <div>
              <vs-button color="success" type="line" icon="done"
                >Vendido</vs-button
              >
            </div>
            <div>
              <vs-button
                color="#707070"
                @click="popUp(index)"
                type="line"
                icon="done"
                >Editar</vs-button
              >
            </div>
            <div>
              <vs-button
                @click="deletar(index)"
                color="danger"
                type="line"
                icon="done"
                >Excluir</vs-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CARD -->
    <!-- POP UP -->
    <vs-popup v-if="esperadados" title="Lote" :active.sync="popupActivo">
      <div class="pop-container">
        <h3>
          {{ lotes[indexPopUp].raca }} - Lote
          {{ lotes[indexPopUp].quantidade }}
        </h3>
        <div class="popup-animal">
          <div class="text-popup">
            <ul>
              <li>Sexo: {{ lotes[indexPopUp].sexo }}</li>
              <li>Castrado: {{ lotes[indexPopUp].castrado }}</li>
              <li>Idade: {{ lotes[indexPopUp].idade }}</li>
              <li>Arrobas: {{ lotes[indexPopUp].pesoEstimado }}</li>

              <li>Criação: {{ lotes[indexPopUp].sistemaCriacao }}</li>
              <li>
                Informações Adicionais:
                {{ lotes[indexPopUp].informacoesAdicionais }}
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
        <div class="btn-container-card">
          <div class="animal--c--btn">
            <div>
              <vs-button color="success" type="line" icon="done"
                >Atualizar</vs-button
              >
            </div>

            <div>
              <vs-button
                @click="cancelar()"
                color="danger"
                type="line"
                icon="done"
                >Cancelar</vs-button
              >
            </div>
          </div>
        </div>
      </div>
    </vs-popup>
    <!-- POP UP -->
  </section>
</template>

<script>
import api from "../services/index";
import store from "../store";
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
      user1: store.state.user,
      // pop up
      popupActivo: false,
      // pop up
      // models select
      racaSelect: 0,
      sexoSelect: 0,
      idadeSelect: 0,
      SistemaSelect: 0,

      // models select
      // select options
      racaOptions: [
        { text: "Raça", value: 0 },
        { text: "Angus", value: 1 },
        { text: "Nelore", value: 2 },
      ],
      sexo: [
        { text: "Sexo", value: 0 },
        { text: "Macho", value: 1 },
        { text: "Fêmea", value: 2 },
      ],
      idade: [
        { text: "Idade", value: 0 },
        { text: "18 - 20 meses", value: 1 },
        { text: "20 - 22 meses", value: 2 },
        { text: "22 - 24 meses", value: 3 },
        { text: "24 - 26 meses", value: 4 },
        { text: "26 - 28 meses", value: 5 },
        { text: "28 - 30 meses", value: 6 },
        { text: "30 + meses", value: 7 },
      ],
      sistemaCriacao: [
        { text: "Sistema de Criacao", value: 0 },
        { text: "Intensivo", value: 1 },
        { text: "Semi-Intensivo", value: 2 },
        { text: "Extensivo", value: 3 },
      ],
      // select options
      lotes: [],
      indexPopUp: 0,
      esperadados: false,
    };
  },
  methods: {
    cancelar() {
      this.popupActivo = false;
    },
    popUp(index) {
      this.indexPopUp = index;
      this.popupActivo = true;
    },
  },
};
</script>

<style lang="scss" scoped>
// btn
.animal--c--btn {
  display: flex;

  width: 100%;
  align-items: center;
  justify-content: space-around;
}
// btn
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
  min-width: 500px;
  max-width: 500px;
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
  display: flex;
  flex-direction: column;
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
  // card
  .card-container-cc {
    padding: 30px;
  }
  .card--cc {
    margin: 50px 0px;
    min-width: 100%;
  }

  .btn-container-card {
    padding: 20px;
  }
  .btn-container-card .btncard {
    font-size: 15px;
    padding: 8px;
  }
}
</style>


 


    