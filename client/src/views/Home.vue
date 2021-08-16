<template>
  <div class="home-container">
    <StartOrder />
  </div>
</template>

<script>
import StartOrder from "../components/home/StartOrder.vue";

export default {
  name: "Home",
  components: {
    StartOrder,
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b0800;
  min-height: 100vh;
  width: 100%;
}
</style>
