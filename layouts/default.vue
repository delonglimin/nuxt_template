<template>
  <div class="container">
    <site-header></site-header>
    <div class="main_container">
      <nuxt />
    </div>
    <site-footer></site-footer>
  </div>
</template>
<style lang="scss" scoped>
.main_container{
  min-height: 800px;
}
</style>