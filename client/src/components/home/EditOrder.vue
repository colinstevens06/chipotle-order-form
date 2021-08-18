<template>
  <div>
    <h1 style="text-align: center; margin-bottom: 25px">Edit Your Order</h1>
    <div class="edit-order_options" v-if="orderSelected === false">
      <div v-for="order in orderItems" :key="order.itemID">
        <EditOrderOptions :order="order" @edit-selected-item="editSingleItem" />
      </div>
      <button class="edit_back-button" @click="$emit('cancel')">Back</button>
    </div>
    <div class="edit-order_selected-item" v-if="orderSelected === true">
      <BurritoOptions :orderItemToEdit="orderItemToEdit" />
    </div>
  </div>
</template>

<script>
import EditOrderOptions from "./EditOrderOptions";
import BurritoOptions from "./BurritoOptions.vue";

export default {
  name: "EditOrder",
  props: {
    orderItems: Array,
  },
  emits: ["cancel"],
  components: {
    EditOrderOptions,
    BurritoOptions,
  },
  data() {
    return {
      orderSelected: false,
      orderItemToEdit: {},
    };
  },
  methods: {
    editSingleItem: function (input) {
      let itemToEdit = this.orderItems.filter((item) => item.itemID === input);

      this.orderItemToEdit = itemToEdit[0];
      console.log(this.orderItemToEdit);

      this.orderSelected = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.edit_back-button {
  @include basicButton;
  display: block;
  margin-top: 45px;
  margin-left: auto;
  margin-right: auto;
}
</style>