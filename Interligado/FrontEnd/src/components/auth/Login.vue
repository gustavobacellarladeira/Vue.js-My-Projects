<template>
  <section>
    <div class="form-c">
      <b-form @submit.stop.prevent class="bform-c">
        <div class="container-radio">
          <ul class="leftx">
            <li class="modelx"><h5>Entrar como</h5></li>
            <li>
              <vs-radio
                v-model="radios1"
                vs-name="radios1"
                vs-value="Frigorifico"
                >Frigorifico</vs-radio
              >
            </li>
            <li>
              <vs-radio
                v-model="radios1"
                vs-name="radios1"
                vs-value="Pecuarista"
                >Pecuarista</vs-radio
              >
            </li>
          </ul>
        </div>
        <label for="feedback-user">Email</label>
        <div>
          <b-form-input v-model="loginForm.email"></b-form-input>
        </div>
        <div>
          <label for="feedback-user">Senha</label>
          <b-form-input v-model="loginForm.senha"></b-form-input>
        </div>
        <div class="btn-form-c">
          <vs-button
            @click="login"
            class="btn-sumit"
            color="success"
            text-color="white"
            >Entrar</vs-button
          >
        </div>
        <div>
          <router-link to="/escolhercadastro">
            <b>Esqueci minha senha!</b>
          </router-link>
        </div>
      </b-form>
      <div class="criar-conta">
        <div>
          <router-link to="/escolhercadastro">
            <b>Não tem conta ainda?</b>
          </router-link>
        </div>
        <div>
          <vs-button color="success" text-color="white">Criar conta</vs-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "../../store";
export default {
  data() {
    return {
      radios1: "Frigorifico",
      loginForm: {
        email: "",
        senha: "",
      },
    };
  },

  methods: {
    login() {
      this.$vs.loading();

      // faz o login do frigorifico

      if (this.radios1 === "Frigorifico") {
        const user = "Frigorifico";
        localStorage.setItem("access_frigorifico", user);
        try {
          this.$store
            .dispatch("ActionDoLoginFrigorifico", {
              email: this.loginForm.email,
              senha: this.loginForm.senha,
            })
            .then((response) => {
              console.log(response);

              this.$router.push({ name: "FrigorificoHome" });
              this.$vs.loading.close();
            });
        } catch (err) {
          console.log(err);
        }
      }
      // faz o login do pecuarista
      if (this.radios1 === "Pecuarista") {
        // define o usuario
        const user = "Pecuarista";
        localStorage.setItem("access_pecuarista", user);
        try {
          this.$store
            .dispatch("ActionDoLoginPecuarista", {
              email: this.loginForm.email,
              senha: this.loginForm.senha,
            })
            .then((res) => {
              console.log(res);
              this.$router.push({ name: "PecuaristaHome" });
              this.$vs.loading.close();
            });
        } catch (err) {
          console.log(err);
        }
      }
      this.$vs.loading.close();
    },

    /// antigo login
    submit() {
      this.$vs.loading();
      // testar loading

      this.$store
        .dispatch("ActionDoLogin", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);

          this.msg = response.msg;

          if (response.error) {
            console.log(response.error);
            this.error = response.error;
            this.$vs.notify({
              title: this.error,
              text: "Please check your server address username and password",
              position: "top-center",
              color: "danger",
            });
            store.state.token = null;
          }
          if (response.msg) {
            this.$router.push({ name: "Inicio" });
          }

          this.$vs.loading.close();
        })
        .catch((error) => {
          this.$vs.loading.close();
          this.serverError = error.response.data;
          this.password = "";
          this.successMessage = "";
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.bform-c {
  border: 2px solid grey;
  border-radius: 20px;
  padding: 50px;
}
.form-c {
  padding-top: 50px;
  text-align: start;
  width: 30%;
  margin: 0 auto;
}
.btn-form-c {
  padding: 30px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-form-c .btn-sumit {
  padding: 10px 30px;
}
.criar-conta {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.criar-conta div {
  margin: 0 20px 0 0;
}
@media only screen and (max-width: 959px) {
  .form-c {
    width: 90%;
  }
}
</style>

