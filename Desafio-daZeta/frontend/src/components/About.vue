<template>
  <div class="about--container">
    <div class="about-content">
      <div><h1>Sobre Nós</h1></div>
      <div><p>Somos um site de hamburguerias do brasil</p></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  color: #000000;
}
.about--container {
  border-top: #e26b00 1px solid;
  border-bottom: #e26b00 1px solid;
  background: #ffffff;
  height: 50vh;
  display: flex;
  align-items: center;
}
.about-content {
  margin: 0 auto;
  width: 80%;
  padding: 10px;
  // background: #0c163d;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>