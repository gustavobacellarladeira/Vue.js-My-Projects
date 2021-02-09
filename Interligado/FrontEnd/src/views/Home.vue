<template>
  <section>
    <!-- <div class="alert11">
      <h6>
        Esse site é apenas de demonstração, isso não é o produto final !!! o
        intuito é conseguir feedback para poder melhorar : )
      </h6>
    </div> -->
    <div class="hero--container">
      <Hero />
    </div>
    <div class="modelos-cc">
      <!-- CARD -->
      <div class="card-container-cc">
        <div class="card--cc">
          <div class="card-img">
            <img
              width="100%"
              src="https://www.farmnews.com.br/wp-content/uploads/2019/05/bgiv19-mai-19.jpg"
              alt="boi"
            />
          </div>
          <div class="card-title">Cotação da Arroba</div>
          <div class="btn-container-card">
            <vs-button
              class="btncard"
              color="primary"
              type="filled"
              href="https://www.cepea.esalq.usp.br/br/indicador/boi-gordo.aspx"
              >Acompanhe</vs-button
            >
          </div>
        </div>
      </div>
      <!-- CARD -->
      <!-- CARD -->
      <div class="card-container-cc">
        <div class="card--cc">
          <div class="card-img">
            <img
              width="100%"
              src="https://cdn.noticiasagricolas.com.br/dbimagens/76c09b687d110824bf53955a7caeb8d8.jpg"
              alt="boi"
            />
          </div>
          <div class="card-title">Guia de Trânsito Animal</div>
          <div class="btn-container-card">
            <vs-button
              class="btncard"
              color="primary"
              type="filled"
              href="https://www.gov.br/pt-br/servicos-estaduais/emitir-guia-de-transito-animal-gta-1"
              >Saiba mais</vs-button
            >
          </div>
        </div>
      </div>
      <!-- CARD -->
      <!-- CARD -->
      <div class="card-container-cc">
        <div class="card--cc">
          <div class="card-img">
            <img
              width="100%"
              src="data:image/png;base64,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"
              alt="boi"
            />
          </div>
          <div class="card-title">Modelo de Contrato</div>
          <div class="btn-container-card">
            <vs-button
              class="btncard"
              color="primary"
              type="filled"
              href="https://cdn.discordapp.com/attachments/800713148134850591/804767934760091748/Documento.docx"
              >Baixe agora</vs-button
            >
          </div>
        </div>
      </div>
      <!-- CARD -->
    </div>
  </section>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  components: {
    Hero,
  },
};
</script>

<style lang="scss" scoped>
.modelos-cc {
  padding: 70px;
  display: flex;
}
.hero--container {
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
  margin: 0px;
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

.card-title {
  padding: 20px 0 0 0;
  text-align: center;
}
.btn-container-card {
  padding: 20px;
}
.btn-container-card .btncard {
  font-size: 15px;
  padding: 8px;
}

/* Smaller than standard 960 (devices and browsers) */
@media only screen and (max-width: 959px) {
  .modelos-cc {
    flex-direction: column;
    padding: 0;

    padding: 70px 0px;
  }
  .card-container-cc {
    padding: 50px 0;
  }
}
</style>