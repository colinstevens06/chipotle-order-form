<template>
  <div>
    <h1>Edit Your Order</h1>
    <div class="edit-order_options" v-if="orderSelected === false">
      <div v-for="order in orderItems" :key="order.itemID">
        <EditOrderOptions :order="order" />
      </div>
      <button class="edit_back-button" @click="$emit('cancel')">Back</button>
    </div>
    <div class="edit-order_selected-item" v-if="orderSelected === true"></div>
  </div>
</template>

<script>
import EditOrderOptions from "./EditOrderOptions";

export default {
  name: "EditOrder",
  props: {
    orderItems: Array,
  },
  emits: ["cancel"],
  components: {
    EditOrderOptions,
  },
  data() {
    console.log("this.orderItems", this.orderItems);

    return {
      orderSelected: false,
      orderToEdit: {},
    };
  },
};
</script>

<style lang="scss" scoped>
</style>