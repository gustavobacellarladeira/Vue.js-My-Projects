<template>
  <section>
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
    <!-- catalago -->
    <CatalagoFrigorifico />
    <!-- catalago -->
  </section>
</template>

<script>
import CatalagoFrigorifico from "@/components/CatalagoFrigorifico.vue";

export default {
  components: {
    CatalagoFrigorifico,
  },
};
</script>

<style lang="scss" scoped>
.title--c {
  display: flex;
  width: 100%;
}
.title-frigo {
  background-color: rgba(134, 198, 149, 0.3);
  background: #86c695 0% 0% no-repeat padding-box;
  border-bottom: 4px solid #218838;
  font-size: 30px;
  padding: 20px;
  color: black;
  width: 50%;
}
.title-frigo-2 {
  background-color: rgba(134, 198, 149, 0.15);
  border-bottom: 4px solid #218838;
  font-size: 30px;
  padding: 20px;
  color: black;
  width: 50%;
}
.title-frigo-2:hover {
  background-color: rgba(134, 198, 149, 0.3);
  background: #86c695 0% 0% no-repeat padding-box;
}
.title-frigo-2 a {
  color: #707070;
}
a {
  padding: 20px;
  color: #000000;
}
a:hover {
  text-decoration: none;
}
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
}
</style>