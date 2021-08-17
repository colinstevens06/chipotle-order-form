<template>
  <div>{{ order.protein[0] }}: {{ order.itemPrice }}</div>
</template>

<script>
export default {
  name: "EditOrderOptions",
  props: ["order"],
};
</script>

<style lang="scss" scoped>
</style>