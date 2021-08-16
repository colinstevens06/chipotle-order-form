<template>
  <div class="start-order_container">
    <div class="start-order_heading">Start Your Order</div>

    <div class="start-order_options" v-if="orderType === ''">
      <div class="order-card" @click="orderType = 'burrito'">Burrito</div>
      <div class="order-card">Bowl</div>
      <div class="order-card">Tacos</div>
    </div>
    <div class="burrito-options" v-if="orderType === 'burrito'">
      <BurritoOptions />
    </div>
  </div>
</template>

<script>
import BurritoOptions from "./BurritoOptions.vue";

export default {
  name: "StartOrder",
  components: {
    BurritoOptions,
  },
  data() {
    return {
      orderType: "",
      order: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.start-order_container {
  background: rgb(236, 236, 236);
  min-height: 50vh;
  min-width: 33%;
  border-radius: 5px;
  padding: 12px 24px;
  margin: -3%;
  transform: translate(0, -25%);
  font-family: $fontFamily;

  .start-order_heading {
    text-align: center;
    font-size: 1.5rem;
    color: $primaryFontColor;
    margin: 15px;
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

      &:hover {
        cursor: pointer;
        transition: 0.5s;
        box-shadow: 0 0 16px 0 rgb(0 0 0 / 60%);
      }
    }
  }
}
</style>