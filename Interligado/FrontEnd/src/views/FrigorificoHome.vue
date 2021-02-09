<template>
  <section>
    <div class="title-frigo">
      <b>Lote Animais</b>
    </div>
    <!-- animais -->
    <CatalagoAnimais />
    <!-- animais -->
  </section>
</template>

<script>
import CatalagoAnimais from "@/components/CatalagoAnimais.vue";

export default {
  components: {
    CatalagoAnimais,
  },
};
</script>

<style lang="scss" scoped>
.title-frigo {
  background-color: #86c695;
  border-bottom: 4px solid #218838;
  font-size: 30px;
  padding: 20px;
  color: black;
}
</style>


 


    