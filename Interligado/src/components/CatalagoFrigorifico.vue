<template>
  <section>
    <!-- FIM TITLE -->
    <div class="filtro-frigo">
      <div class="filtro-c">
        <div class="filtro-c-inside">
          <div>Filtrar por Região:</div>
          <!--  INICIO SELECT -->
          <vs-select
            class="selectExample"
            label="Cidade"
            v-model="cidadeSelect"
          >
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in cidadeselcts"
            />
          </vs-select>
          <!--  FIM SELECT -->
          <!--  INICIO SELECT -->
          <vs-select class="selectExample" label="Uf" v-model="ufSelect">
            <vs-select-item
              :key="index"
              :value="item.value"
              :text="item.text"
              v-for="(item, index) in ufselcts"
            />
          </vs-select>
          <!--  FIM SELECT -->

          <vs-button
            class="btn-filtro"
            line-origin="left"
            color="success"
            type="line"
            >Buscar</vs-button
          >
        </div>
      </div>
    </div>
    <!-- FIM DO FILTRO -->

    <!-- CARD -->
    <div class="card-container-cc">
      <div
        class="card--cc"
        v-for="(item, index) of Frigorificos"
        :key="item.id"
      >
        <div class="card-img">
          <img
            width="100%"
            src="https://www.realfurgoes.com.br/wp-content/uploads/2019/03/280405-tarefa-exclusiva-para-favoritos-caminhao-frigorifico-x-dicas-essenciais-para-a-economia-de-combustivel.jpg"
            alt="frigo"
          />
        </div>
        <div class="card-title">
          <b>{{ item.nomePropriedade }}</b>
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
        <h3>JBS</h3>
        <div class="popup-animal">
          <div class="text-popup">
            <ul>
              <li>CNPJ: {{ Frigorificos[indexPopUp].cnpj }}</li>
              <li>Licença: {{ Frigorificos[indexPopUp].licenca }}</li>
              <li>CEP: {{ Frigorificos[indexPopUp].endereco.cep }}</li>

              <li>Rua: {{ Frigorificos[indexPopUp].endereco.rua }}</li>
              <li>Numero: {{ Frigorificos[indexPopUp].endereco.numero }}</li>
              <li>Bairro: {{ Frigorificos[indexPopUp].endereco.bairro }}</li>

              <li>Estado: {{ Frigorificos[indexPopUp].endereco.estado }}</li>
              <li>Cidadade: {{ Frigorificos[indexPopUp].endereco.cidade }}</li>
            </ul>
          </div>
          <div class="card-img-pop">
            <img
              width="100%"
              src="https://www.realfurgoes.com.br/wp-content/uploads/2019/03/280405-tarefa-exclusiva-para-favoritos-caminhao-frigorifico-x-dicas-essenciais-para-a-economia-de-combustivel.jpg"
              alt="boi"
            />
          </div>
        </div>
        <!-- divisao dos contato e info -->
        <router-link to="perfilfrigorifico">
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
    </vs-popup>
    <!-- POP UP -->
  </section>
</template>

<script>
import api from "../services/index";
export default {
  async created() {
    await api.get("/frigorifico/listar").then((res) => {
      console.log(res);
      this.Frigorificos = res.data;
      this.esperadados = true;
    });
  },
  data() {
    return {
      // pop up
      popupActivo: false,
      // pop up
      cidadeSelect: 0,
      ufSelect: 0,
      cidadeselcts: [
        { text: "Cidade", value: 0 },
        { text: "Lavras", value: 0 },
        { text: "São Paulo", value: 1 },
      ],
      ufselcts: [
        { text: "UF", value: 0 },
        { text: "MG", value: 0 },
        { text: "SP", value: 1 },
      ],
      // frigorificos
      Frigorificos: [],
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
  },
};
</script>

<style lang="scss" scoped>
.title--c {
  display: flex;
  width: 100%;
}
.title-frigo {
  background-color: #86c695;
  border-bottom: 4px solid #218838;
  font-size: 30px;
  padding: 20px;
  color: black;
  width: 50%;
}
.title-frigo-2 {
  background-color: #e2c764;
  border-bottom: 4px solid #218838;
  font-size: 30px;
  padding: 20px;
  color: black;
  width: 50%;
}
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

  width: 100%;
}
.text-popup ul li {
  font-size: 15px;
  padding: 10px;
  font-weight: 600;
}
.card-img-pop {
  max-width: 200px;
  padding: 10px;

  width: 100%;
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