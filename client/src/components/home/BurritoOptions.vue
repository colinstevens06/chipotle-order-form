<template>
  <form class="burrito-form" @submit.prevent="addItemToBag">
    <h2 style="text-align: center">Build Your Burrito</h2>
    <h3>Protein</h3>
    <input type="checkbox" id="chicken" v-model="protein" value="Chicken" />
    <label for="Chicken">Chicken</label>
    <input type="checkbox" id="steak" v-model="protein" value="Steak" />
    <label for="steak">Steak</label>
    <input type="checkbox" id="carnitas" v-model="protein" value="Carnitas" />
    <label for="carnitas">Carnitas</label>
    <input type="checkbox" id="barbacoa" v-model="protein" value="Barbacoa" />
    <label for="barbacoa">Barbacoa</label>
    <hr />
    <h3>Rice</h3>
    <input type="radio" id="white-rice" v-model="rice" value="White Rice" />
    <label for="white-rice">White Rice</label>
    <input type="radio" id="brown-rice" v-model="rice" value="Brown Rice" />
    <label for="brown-rice">Brown Rice</label>
    <input type="radio" id="no-rice" v-model="rice" value="No Rice" />
    <label for="no-rice">No Rice</label>
    <hr />
    <h3>Beans</h3>
    <input type="radio" id="black-beans" v-model="beans" value="Black Beans" />
    <label for="black-beans">Black Beans</label>
    <input type="radio" id="pinto-beans" v-model="beans" value="Pinto Beans" />
    <label for="pinto-beans">Pinto Beans</label>
    <input type="radio" id="black-beans" v-model="beans" value="No Beans" />
    <label for="no-beans">No Beans</label>
    <hr />

    <!-- TOPPINGS -->
    <h3>Toppings</h3>
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
    <h3>Sides</h3>
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
      value="Chips and Hot Salsa"
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
    <h3>Drinks</h3>
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
    <h2>Price: ${{ itemPrice }}</h2>

    <div class="form-buttons">
      <input
        type="submit"
        :value="
          this.orderType === 'edit-order' ? 'Update Item' : 'Add Item to Bag'
        "
      />
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
  emits: ["cancel", "add-item", "update-item"],
  props: ["orderType", "orderItemToEdit"],
  methods: {
    addItemToBag() {
      let orderItem;

      if (
        this.orderType === "burrito" ||
        this.orderType === "bowl" ||
        this.orderType === "tacos"
      ) {
        orderItem = {
          itemID: this.generateRandomID(),
          itemType: this.orderType,
          protein: this.protein,
          rice: this.rice,
          beans: this.beans,
          toppings: this.toppings,
          sides: this.sides,
          drinks: this.drinks,
          itemPrice: this.calculateItemPrice(),
        };
        this.$emit("add-item", orderItem);
      } else {
        orderItem = {
          itemID: this.orderItemToEdit.itemID,
          itemType: this.orderItemToEdit.itemType,
          protein: this.protein,
          rice: this.rice,
          beans: this.beans,
          toppings: this.toppings,
          sides: this.sides,
          drinks: this.drinks,
          itemPrice: this.calculateItemPrice(),
        };
        this.$emit("update-item", orderItem);
      }
    },
    calculateItemPrice() {
      let price = 0;
      if (this.protein.length === 1) {
        if (this.protein[0] === "Chicken") {
          price += 8.15;
        } else if (this.protein[0] === "Carnitas") {
          price += 8.65;
        } else {
          price += 9.5;
        }
      } else if (this.protein.length > 1) {
        price += 9.5;
      }

      if (this.toppings.includes("Guacamole")) {
        price += 2.5;
      }
      if (this.toppings.includes("Queso")) {
        price += 1.6;
      }
      if (this.sides.includes("Chips")) {
        price += 1.7;
      }
      if (this.sides.includes("Chips and Guacamole")) {
        price += 4.2;
      }
      if (this.sides.includes("Chips and Tomato Salsa")) {
        price += 2.25;
      }
      if (this.sides.includes("Chips and Hot Salsa")) {
        price += 2.25;
      }
      if (this.sides.includes("Chips and Medium Salsa")) {
        price += 2.25;
      }
      if (this.sides.includes("Chips and Queso")) {
        price += 4.2;
      }
      if (this.sides.includes("Guacamole")) {
        price += 2.5;
      }
      if (this.sides.includes("Queso")) {
        price += 2.5;
      }
      if (this.drinks.includes("Fountain Drink")) {
        price += 2.65;
      }
      if (this.drinks.includes("Izze")) {
        price += 3.2;
      }
      if (this.drinks.includes("Juice")) {
        price += 3.2;
      }
      if (this.drinks.includes("Bottled Water")) {
        price += 2.6;
      }
      return price.toFixed(2);
    },
    generateRandomID() {
      let newID = Math.floor(Math.random() * 100000);
      return newID;
    },
  },
  watch: {
    protein: function () {
      this.itemPrice = this.calculateItemPrice();
    },
    toppings: function () {
      this.itemPrice = this.calculateItemPrice();
    },
    sides: function () {
      this.itemPrice = this.calculateItemPrice();
    },
    drinks: function () {
      this.itemPrice = this.calculateItemPrice();
    },
  },
  created() {
    if (this.orderItemToEdit) {
      this.protein = this.orderItemToEdit.protein;
      this.rice = this.orderItemToEdit.rice;
      this.beans = this.orderItemToEdit.beans;
      this.toppings = this.orderItemToEdit.toppings;
      this.sides = this.orderItemToEdit.sides;
      this.drinks = this.orderItemToEdit.drinks;
      this.itemPrice = this.orderItemToEdit.itemPrice;
    }
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

  label,
  input {
    font-size: 1.25rem;
    margin-bottom: 15px;
  }

  .form-buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;

    input,
    button {
      @include basicButton;
    }
  }
}
</style>