<template>
  <div class="start-order_container">
    <div class="start-order_heading" v-if="orderType === ''">
      Start Your Order
    </div>
    <div class="start-order_heading" v-else-if="orderType === 'another-item'">
      Add Another Item?
    </div>

    <div
      class="start-order_options"
      v-if="orderType === '' || orderType === 'another-item'"
    >
      <div class="order-card" @click="orderType = 'burrito'">Burrito</div>
      <div class="order-card">Bowl</div>
      <div class="order-card">Tacos</div>
    </div>
    <div class="burrito-options" v-if="orderType === 'burrito'">
      <BurritoOptions
        @cancel="
          orderItems.length >= 1
            ? (orderType = 'another-item')
            : (orderType = '')
        "
        @add-item="addToBag"
        :orderType="orderType"
      />
    </div>
    <div class="editOrder" v-if="orderType === 'edit-order'">
      <EditOrder
        :orderItems="orderItems"
        :orderType="orderType"
        @cancel="
          orderItems.length >= 1
            ? (orderType = 'another-item')
            : (orderType = '')
        "
        @update-all-order-items="updateAllOrderItems"
      />
    </div>

    <div class="order_bag" v-if="orderType === 'another-item'">
      <div class="order_items-in-bag">
        Items in bag: {{ orderItems.length }}
      </div>
      <div class="order_edit-complete">
        <button @click="orderType = 'edit-order'">Edit Order</button>
        <button>Submit Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import BurritoOptions from "./BurritoOptions.vue";
import EditOrder from "./EditOrder.vue";
export default {
  name: "StartOrder",
  components: {
    BurritoOptions,
    EditOrder,
  },
  data() {
    return {
      orderType: "",
      orderItems: [],
      orderTotal: 0,
      orderItemToEdit: {},
    };
  },
  methods: {
    addToBag: function (item) {
      this.orderItems = [...this.orderItems, item];
      this.orderType = "another-item";
    },
    updateAllOrderItems: function (items) {
      this.orderItems = items;
    },
  },
};
</script>

<style lang="scss" scoped>
.start-order_container {
  position: relative;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  background: rgb(236, 236, 236);
  // min-heigt: 50vh;
  min-width: 500px;
  max-width: 50%;
  border-radius: 5px;
  padding: 12px 24px;
  margin: 25px auto;
  font-family: $fontFamily;
  overflow: scroll;
  .start-order_heading {
    text-align: center;
    font-size: 1.5rem;
    color: $primaryFontColor;
    margin: 15px;
    // align-self: baseline;
  }
  .start-order_options {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 15px;
    .order-card {
      flex: 0 0 30.333%;
      margin-left: 3%;
      max-width: 30.333%;
      margin-bottom: 3%;
      padding: 1em;
      box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);
      background: #fff;
      transition: 0.5s;
      text-align: center;
      &:hover {
        cursor: pointer;
        transition: 0.5s;
        box-shadow: 0 0 16px 0 rgb(0 0 0 / 60%);
      }
    }
  }
  .order_bag {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 25px;
    margin-top: 25px;
    .order_items-in-bag {
      font-size: 1.75rem;
    }
    .order_edit-complete {
      display: flex;
      justify-content: space-around;
      button {
        @include basicButton;
        width: 200px;
      }
    }
  }
}
</style>
