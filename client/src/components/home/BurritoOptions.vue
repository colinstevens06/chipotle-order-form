<template>
  <form class="burrito-form">
    <h2>Protein</h2>
    <input type="checkbox" id="chicken" v-model="protein" value="Chicken" />
    <label for="Chicken">Chicken</label>
    <input type="checkbox" id="steak" v-model="protein" value="Steak" />
    <label for="steak">Steak</label>
    <input type="checkbox" id="carnitas" v-model="protein" value="Carnitas" />
    <label for="carnitas">Carnitas</label>
    <input type="checkbox" id="barbacoa" v-model="protein" value="Barbacoa" />
    <label for="barbacoa">Barbacoa</label>
    <hr />
    <h2>Rice</h2>
    <input type="radio" id="white-rice" v-model="rice" value="White Rice" />
    <label for="white-rice">White Rice</label>
    <input type="radio" id="brown-rice" v-model="rice" value="Brown Rice" />
    <label for="brown-rice">Brown Rice</label>
    <input type="radio" id="no-rice" v-model="rice" value="No Rice" />
    <label for="no-rice">No Rice</label>
  </form>
</template>

<script>
export default {
  name: "BurritoOptions",
  data() {
    return {
      protein: [],
      rice: "",
      beans: [],
      toppings: [],
      sides: [],
      drinks: [],
      itemPrice: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.burrito-form {
  * {
    margin-bottom: 10px;
  }

  hr {
    margin: 15px 0;
  }

  label {
    margin-left: 5px;
    margin-right: 25px;
  }
}
</style>