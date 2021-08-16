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
  display: flex;
  padding: 10px 25px;
  border-bottom: 1px solid #5f5f5f;
  box-shadow: 0 2px 6px 6px#656565, 0 4px 6px 6px #7a7a7a, 0 6px 6px 6px #bebebe;
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