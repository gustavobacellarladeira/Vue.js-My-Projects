<template>
  <div class="animal--c">
    <div class="animal--c-img">
      <img
        src="https://images.pexels.com/photos/591/animal-countryside-agriculture-farm.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
    <div class="animal--c-content">
      <div class="po"><h4>500 Cabeças - Nelore - Macho Castrado</h4></div>
      <div class="pc">
        <h6>18-20 meses | 70 arrobas | Criação Intensiva</h6>
      </div>
      <div class="animal--c--btn">
        <div>
          <vs-button color="success" type="line" icon="done">Vendido</vs-button>
        </div>
        <div>
          <vs-button color="#707070" type="line" icon="done">Editar</vs-button>
        </div>
        <div>
          <vs-button color="danger" type="line" icon="done">Excluir</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.animal--c {
  background: #00000010 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #000000;
  border-radius: 5px;
  opacity: 1;
  min-width: 225px;
  min-height: 250px;
  display: flex;
  align-items: center;
}
img {
  width: 100%;
  height: 100%;
}
.animal--c-img {
  max-width: 225px;
  height: 250px;
  background: gray;
  min-width: 225px;
  min-height: 250px;
}

// content
.animal--c-content {
  padding: 10px 40px;
  display: flex;

  flex-direction: column;
  min-height: 250px;
  align-items: center;
  justify-content: space-around;
}

// btn
.animal--c--btn {
  display: flex;

  width: 100%;
  align-items: center;
  justify-content: space-around;
}
// btn
// content
</style>