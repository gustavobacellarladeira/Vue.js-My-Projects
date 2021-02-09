<template>
  <section>
    <!-- TITTLE -->
    <div class="title--c">
      <div class="title-frigo">
        <router-link to="/pecuarista">
          <b>Catálago de Frigorificos</b>
        </router-link>
      </div>
      <div class="title-frigo-2">
        <router-link to="/meusanimais">
          <b>Lote Animais</b>
        </router-link>
      </div>
    </div>
    <!-- TITTLE -->
    <div class="btn-adiciionar">
      <vs-input
        class="btn-filtro adc-btns"
        icon="search"
        placeholder="Procurar por lote"
      />
      <vs-button
        to="/cadastraranimal"
        line-origin="left"
        color="success"
        class="adc-btns btn-filtro"
        type="line"
      >
        + Adicionar novo animal</vs-button
      >
    </div>

    <!-- teste -->
    <CatalagoMeusAnimais />
    <!-- teste -->
    <div class="alert11">
      <h6>
        Essa pagina ainda não pega os animais especifico por pecuarista! :( --
        Estamos trabalhando para arruar :)
      </h6>
    </div>
  </section>
</template>

<script>
import CatalagoMeusAnimais from "@/components/CatalagoMeusAnimais.vue";
export default {
  components: {
    CatalagoMeusAnimais,
  },
  methods: {},
  data() {
    return {
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
    };
  },
};
</script>

<style lang="scss" scoped>
// mneus animais
.meus-animais--c {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
// mneus animais

// btn
.searchs {
  width: 50%;
}
.adc-btns {
}
.btn-adiciionar {
  margin: 0 auto;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-around;

  padding: 30px 0 0 0;
}
// btn
.title--c {
  display: flex;
  width: 100%;
}
.title-frigo {
  background-color: rgba(134, 198, 149, 0.15);
  border-bottom: 4px solid #218838;

  border-bottom: 4px solid #218838;
  font-size: 30px;
  padding: 20px;
  color: #707070;
  width: 50%;
}
.title-frigo-2 {
  background-color: rgba(134, 198, 149, 0.3);
  background: #86c695 0% 0% no-repeat padding-box;
  border-bottom: 4px solid #218838;
  font-size: 30px;
  padding: 20px;
  color: black;
  width: 50%;
}
.title-frigo:hover {
  background-color: rgba(134, 198, 149, 0.3);
  background: #86c695 0% 0% no-repeat padding-box;
}
.title-frigo a {
  color: #707070;
}
a {
  padding: 20px;

  color: #000000;
}
a:hover {
  text-decoration: none;
}

// FILTRO
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
// FILTRO
@media only screen and (max-width: 959px) {
  .title--c {
    text-align: justify;
  }
  .title--c a {
    font-size: 30px;
    text-align: center;
  }
  .title-frigo {
    text-align: justify;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title-frigo-2 {
    text-align: justify;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // btn
  .searchs {
    width: 100%;
  }

  .btn-adiciionar {
    flex-direction: column;
  }
  .btn-filtro {
    padding: 30px 0;
    font-size: 20px;
  }
}
</style>