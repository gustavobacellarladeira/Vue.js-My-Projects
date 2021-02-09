<template>
  <footer>
    <div class="sobrenos-footer">
      <router-link class="sobrenos-footer" to="/sobrenos"
        >Sobre nós</router-link
      >
      <router-link class="sobrenos-footer linkfoo" to="/sobrenos">
        <span class="material-icons"> email </span
        >interligado.agro@gmail.com</router-link
      >
    </div>
    <div class="north-icon">
      <a href="#navbar"><span class="material-icons icon"> north </span></a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  color: white;
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
}
.sobrenos-footer {
  color: white;
}
.icon {
  color: white;
}
.north-icon {
  border: white solid 2px;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.north-icon a {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sobrenos-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.linkfoo {
  margin: 0 50px;
}
@media only screen and (max-width: 959px) {
  .linkfoo {
    margin: 5px 10px;
  }
}
</style>