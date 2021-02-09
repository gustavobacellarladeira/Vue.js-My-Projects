<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <div class="content-slong">
      <div class="video-content">
        <div class="slogan">
          <div class="title-slogan">
            <h1>Interligado</h1>
          </div>
          <div class="text-slogan-text">
            <b>
              Uma solução tecnológica inteligente de integração entre
              pecuaristas e frigoríficos
            </b>
          </div>
        </div>
        <iframe
          class="borda-video"
          height="350px"
          src="https://www.youtube.com/embed/TjZiixBb6n8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
          ></iframe
        >
      </div>
    </div>
    <div class="btn-hero-c">
      <vs-button
        class="btn-hero"
        color="#fff"
        to="/escolhercadastro"
        type="border"
        >Saiba mais</vs-button
      >
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.borda-video {
  border-radius: 20px;
}
.content-slong {
  width: 90%;
}
.slogan {
  display: flex;
  flex-direction: column;

  padding: 20px;
}
.slogan h1 {
  margin: 50px 0;
}
.title-slogan {
  width: 100%;
  text-align: start;
}
.text-slogan-text {
  width: 100%;
  text-align: start;
  color: white;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
}

.video-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-hero-c {
  margin: 50px;
}
.borda-video {
  width: 50%;
  box-shadow: 0px 3px 6px #00000029;
}
.masthead {
  filter: opacity(100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 90vh; /* if you don't want it to take up the full screen, reduce this number */
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

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 1px;
}
@media only screen and (max-width: 959px) {
  .content-slong {
    margin-top: 300px;
    width: 100%;
  }
  .video-content {
    text-align: center;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  .btn-hero {
    width: 200px;
    font-size: 25px;
    margin: 50px 0;
  }
  .borda-video {
    width: 80%;
  }
}
</style>
