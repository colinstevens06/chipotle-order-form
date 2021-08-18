<template>
  <div class="order-item" @click="$emit('edit-selected-item', order.itemID)">
    <div class="left-col">
      {{ order.protein[0] }}
      {{ order.itemType }}
    </div>
    <div class="right-col">
      {{ order.itemPrice }}
    </div>
  </div>
</template>

<script>
export default {
  name: "EditOrderOptions",
  props: ["order"],
  emits: ["edit-selected-item"],
};
</script>

<style lang="scss" scoped>
.order-item {
  display: flex;
  justify-content: space-between;
  font-size: 1.75rem;
  padding: 12px 24px;
  margin-bottom: 15px;
  background: #e3e0c5;
  transition: 0.5s;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 20%);

  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background: #e6e4d6;
    box-shadow: 0 0 14px 0 rgb(0 0 0 / 30%);
  }
}
</style>