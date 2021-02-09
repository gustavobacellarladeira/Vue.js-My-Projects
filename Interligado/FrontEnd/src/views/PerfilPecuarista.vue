<template>
  <section>
    <div class="title-frigo">
      <b>Perfil Pecuarista</b>
    </div>
    <div class="perfil--c">
      <div class="perfil--c--usuer">
        <div class="perfil--c--usuer--name">
          <b-avatar
            src="https://images.pexels.com/photos/4321509/pexels-photo-4321509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            size="5rem"
          ></b-avatar>
          <h4>Jose da Silva "Pecuarista"</h4>
        </div>
        <div>
          <vs-button
            class="editarbtn"
            @click="popupActivo2 = true"
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
          <li><b>Nome:</b> Jose da Silva</li>
          <li><b>Cpf ou Cnpj:</b> 254.574.654.82</li>
          <li><b>Licença:</b> Estadual</li>
        </ul>
        <ul>
          <li><b>Nome da Propiedade:</b> Fazenda rio verde</li>
          <li><b>CEP:</b> 37484-654</li>
          <li><b>Referencia de Localização:</b> proximo ao rio verde</li>
        </ul>
        <ul>
          <li>
            <b>Informação Adicional:</b> Disposto a fazer encomendas de lotes
          </li>
        </ul>
      </div>
    </div>

    <!-- EDITAR PERFIL -->
    <div class="btns" v-if="getPecu">
      <vs-button color="success" to="/meusanimais" type="filled"
        >Meus Animais</vs-button
      >
    </div>
    <!-- EDITAR PERFIL -->
  </section>
</template>

<script>
import store from "../store";
export default {
  computed: {
    getPecu() {
      return store.getters.getPecu;
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
  justify-content: space-around;
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