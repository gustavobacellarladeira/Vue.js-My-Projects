<template>
  <div class="masthead" role="img">
    <h1>The Hero Generator</h1>
    <button>When a hero comes along</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 85%,
      rgba(226, 107, 0, 0.65) 100%
    ),
    url(../assets/aaa.jpeg) no-repeat center center scroll;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 141px;
}

button {
  background: #f4c500;
  transition: background ease 0.25s;
  border-radius: 10px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}
button:hover {
  background: #e26b00;
}
button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}
</style>

      

      

    