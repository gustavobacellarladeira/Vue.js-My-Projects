<template>
  <section>
    <div class="title-frigo">
      <b>Perfil Frigorifico</b>
    </div>
    <div class="perfil--c">
      <div class="perfil--c--usuer">
        <div class="perfil--c--usuer--name">
          <b-avatar
            src="https://s.glbimg.com/og/rg/f/original/2010/08/26/thiago1fin.jpg"
            size="5rem"
          ></b-avatar>
          <h4>JBS " Frigorífico "</h4>
        </div>
        <div>
          <vs-button
            @click="popupActivo2 = true"
            class="editarbtn"
            color="dark"
            type="line"
            icon="event_note"
            >Editar</vs-button
          >
        </div>
      </div>
      <!-- fim header -->
      <div class="perfil--c--list">
        <ul>
          <li><b>Nome:</b> JBS</li>
          <li><b>Cnpj:</b> 254.574.654.82</li>
          <li><b>Licença:</b> Estadual</li>
        </ul>
        <ul>
          <li><b>Nome da Propiedade:</b> gadoAxe</li>
          <li><b>CEP:</b> 37484-654</li>
          <li>
            <b>Referencia de Localização:</b> proximo ao shopping mato branco
          </li>
        </ul>
        <ul>
          <li>
            <b>Informação Adicional:</b> Disposto a fazer encomendar lotes
          </li>
        </ul>
      </div>
    </div>

    <!-- EDITAR PERFIL -->
    <div class="btns" v-if="getFrigo">
      <vs-button color="success" to="/frigorifico" type="filled"
        >Ver lotes</vs-button
      >
    </div>
    <!-- EDITAR PERFIL -->
  </section>
</template>

<script>
import store from "../store";
export default {
  computed: {
    getFrigo() {
      return store.getters.getFrigo;
    },
   
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// ----------
.title-frigo {
  background-color: #86c695;
  border-bottom: 4px solid #218838;
  font-size: 30px;
  padding: 20px;
  color: black;
}
.btns {
  padding: 20px;
}
.perfil--c {
  padding: 20px;
}
h4 {
  margin-left: 20px;
}
.perfil--c--usuer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.perfil--c--usuer--name {
  display: flex;
  align-items: center;
  padding: 50px;
}
.perfil--c--list {
  text-align: start;
  align-items: center;
  justify-content: space-between;

  display: flex;
}
.perfil--c--list ul {
  width: 100%;
}
.perfil--c--list ul li {
  padding: 5px;
}

@media only screen and (max-width: 959px) {
  .perfil--c--list {
    flex-direction: column;
  }
  .editarbtn {
    display: none;
  }
  .perfil--c--usuer--name {
    padding: 50px 0;
  }
}
</style>