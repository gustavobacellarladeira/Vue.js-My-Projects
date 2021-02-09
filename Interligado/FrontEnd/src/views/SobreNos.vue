<template>
  <section>
    <div class="hero--container">
      <div class="content-homepage">
        A plataforma Interligado surgiu através de um projeto de capacitação
        (ZettaLab) promovido pela Agência Zetta de Inovação, Geotecnologia e
        Sistemas Inteligentes da Universidade Federal de Lavras (UFLA).
        <br />
        <br />
        O objetivo da plataforma Interligado é promover a integração entre
        pecuaristas e frigoríficos para realizar o intermédio de suas compras.
        <br />
        <br />
        A Interligado oferece segurança, facilidade, confiabilidade e garantia
        de um melhor negócio para ambas as partes. Nós acreditamos que em um
        mundo cada vez mais automatizado e tecnológico é essencial que o
        agronegócio acompanhe essa revolução tecnológica!
        <br />
        <br />
        Para conhecer mais,
        <router-link to="/escolhercadastro"> Cadastre-se!</router-link>
      </div>
      <div class="heroo"></div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.hero--container {
  display: flex;
}
.content-homepage {
  padding: 50px;
  width: 50%;
  text-align: justify;
  font-weight: 600;
}
.heroo {
  width: 50%;
  overflow: hidden;
  background-size: cover !important;

  // background: transparent url("../assets/hero1.png") 0% 0% no-repeat padding-box;
  background: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("../assets/hero1.png") no-repeat center center scroll;
}

/* Smaller than standard 960 (devices and browsers) */
@media only screen and (max-width: 959px) {
  .hero--container {
    flex-direction: column;
  }
  .content-homepage {
    padding: 50px;
    width: 100%;
    text-align: justify;
    font-weight: 600;
  }
  .heroo {
    width: 100%;
  }
}
</style>

 

