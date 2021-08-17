<template>
  <div>
    <h1>Edit Your Order</h1>
    <div v-for="order in orderItems" :key="order.itemID">
      <EditOrderOptions :order="order" />
    </div>
    <!-- <p>{{ ordersToEdit[0].orderType }}</p> -->
  </div>
</template>

<script>
import EditOrderOptions from "./EditOrderOptions";

export default {
  name: "EditOrder",
  props: {
    orderItems: Array,
  },
  components: {
    EditOrderOptions,
  },
  data() {
    console.log("this.orderItems", this.orderItems);
    // return {
    //   ordersToEdit: this.orderItems,
    // };
  },
};
</script>

<style lang="scss" scoped>
</style>