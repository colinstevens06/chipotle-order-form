<template>
  <form class="burrito-form" @submit.prevent="addItemToBag">
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
    <hr />
    <h2>Beans</h2>
    <input type="radio" id="black-beans" v-model="beans" value="Black Beans" />
    <label for="black-beans">Black Beans</label>
    <input type="radio" id="pinto-beans" v-model="beans" value="Pinto Beans" />
    <label for="pinto-beans">Pinto Beans</label>
    <input type="radio" id="black-beans" v-model="beans" value="No Beans" />
    <label for="no-beans">No Beans</label>
    <hr />

    <!-- TOPPINGS -->
    <h2>Toppings</h2>
    <input
      type="checkbox"
      id="guacamole"
      v-model="toppings"
      value="Guacamole"
    />
    <label for="guacamole">Guacamole</label>
    <input
      type="checkbox"
      id="tomato-salsa"
      v-model="toppings"
      value="Tomato Salsa"
    />
    <label for="tomato-salsa">Tomato Salsa</label>
    <input
      type="checkbox"
      id="medium-salsa"
      v-model="toppings"
      value="Medium Salsa"
    />
    <label for="medium-salsa">Medium Green Salsa</label>
    <input
      type="checkbox"
      id="hot-salsa"
      v-model="toppings"
      value="Hot Salsa"
    />
    <label for="hot-salsa">Hot Salsa</label>
    <br />
    <input
      type="checkbox"
      id="corn-salsa"
      v-model="toppings"
      value="Corn Salsa"
    />
    <label for="corn-salsa">Corn Salsa</label>
    <input
      type="checkbox"
      id="sour-cream"
      v-model="toppings"
      value="Sour Cream"
    />
    <label for="sour-cream">Sour Cream</label>
    <input
      type="checkbox"
      id="fajitas"
      v-model="toppings"
      value="Fajita Veggies"
    />
    <label for="fajitas">Fajita Veggies</label>
    <input type="checkbox" id="cheese" v-model="toppings" value="Cheese" />
    <label for="cheese">Cheese</label>
    <br />
    <input type="checkbox" id="lettuce" v-model="toppings" value="Lettuce" />
    <label for="lettuce">Romaine Lettuce</label>
    <input type="checkbox" id="queso" v-model="toppings" value="Queso" />
    <label for="queso">Queso Blanco</label>

    <hr />

    <!-- SIDES -->
    <h2>Sides</h2>
    <input type="checkbox" id="chips" v-model="sides" value="Chips" />
    <label for="chips">Chips</label>

    <input
      type="checkbox"
      id="chips-guacamole"
      v-model="sides"
      value="Chips and Guacamole"
    />
    <label for="chips-guacamole">Chips &#38; Guacamole</label>

    <input
      type="checkbox"
      id="chips-tomato-salsa"
      v-model="sides"
      value="Chips and Tomato Salsa"
    />
    <label for="chips-tomato-salsa">Chips &#38; Tomato Salsa</label>
    <br />
    <input
      type="checkbox"
      id="chips-medium-salsa"
      v-model="sides"
      value="Chips and Medium Salsa"
    />
    <label for="chips-medium-salsa">Chips &#38; Medium Salsa</label>

    <input
      type="checkbox"
      id="chips-hot-salsa"
      v-model="sides"
      value="Chip and Hot Salsa"
    />
    <label for="chips-hot-salsa">Chips &#38; Hot Salsa</label>
    <br />
    <input
      type="checkbox"
      id="chips-queso"
      v-model="sides"
      value="Chips and Queso"
    />
    <label for="chips-queso">Chips &#38; Queso</label>
    <input type="checkbox" id="guacamole" v-model="sides" value="Guacamole" />
    <label for="xxguacamolex">Guacamole</label>
    <input type="checkbox" id="queso" v-model="sides" value="Queso" />
    <label for="queso">Queso</label>
    <hr />
    <h2>Drinks</h2>
    <input
      type="checkbox"
      id="fountain-drink"
      v-model="drinks"
      value="Fountain Drink"
    />
    <label for="fountain-drink">Fountain Drink</label>
    <input type="checkbox" id="izze" v-model="drinks" value="Izze" />
    <label for="izze">Izze</label>
    <input type="checkbox" id="juice" v-model="drinks" value="Juice" />
    <label for="juice">Juice</label>
    <input
      type="checkbox"
      id="bottled-water"
      v-model="drinks"
      value="Bottled Water"
    />
    <label for="bottled-water">Bottled Water</label>
    <hr />
    <h2>Price: {{ itemPrice }}</h2>

    <div class="form-buttons">
      <input type="submit" value="Add Item to Bag" />
      <button @click="$emit('cancel')">Cancel item</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "BurritoOptions",
  data() {
    return {
      protein: [],
      rice: "",
      beans: "",
      toppings: [],
      sides: [],
      drinks: [],
      itemPrice: 0,
    };
  },
  emits: ["cancel", "add-item"],
  methods: {
    addItemToBag() {
      let orderItem = {
        protein: this.protein,
        rice: this.rice,
        beans: this.beans,
        toppings: this.toppings,
        sides: this.sides,
        drinks: this.drinks,
        itemPrice: this.itemPrice,
      };

      console.log("orderItem", orderItem);

      this.$emit("add-item", orderItem);
    },
    calculateItemPrice() {
      let price = 0;
      if (this.proten && this.protein.length === 1) {
        if (this.protein[0] === "Chicken") {
          price = price + 8.15;
        } else if (this.protein && this.protein[0] === "Carnitas") {
          price = price + 8.65;
        } else {
          price = price + 9.5;
        }
      } else if (this.protein && this.protein.length > 1) {
        price = 9.5;
      }

      if (this.toppings && this.toppings.contains("Guacamole")) {
        price = price + 2.5;
      }

      if (this.toppings && this.toppings.contains("Queso")) {
        price = price + 1.6;
      }

      return price;
    },
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

  .form-buttons {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>