<template>
  <div class="nav-container">
    <div class="nav-branding">
      <img src="../assets/cmg-medallion-logo.svg" alt="Chipotle" />
      <div class="brand-name">Chipotle</div>
    </div>
    <div class="nav-links"></div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav-container {
  position: relative;
  display: flex;
  padding: 10px 25px;
  border-bottom: 1px solid #202020;
  box-shadow: 0 2px 6px 6px#202020, 0 4px 4px 4px #2f2f2f, 0 6px 4px 4px #393939;
  z-index: 98;
  background: #ffffff;
}

.nav-branding {
  display: flex;
  align-items: center;

  .brand-name {
    color: $primaryFontColor;
    font-family: $fontFamily;
    margin-left: 25px;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
}
</style>