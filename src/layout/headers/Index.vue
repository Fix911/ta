<template>
  <div class="navbar">
    <Hamburger />
  </div>
</template>
<script setup lang="ts">
import Hamburger from './components/hamburger.vue'
</script>

<style scoped lang="scss">
.navbar{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
</style>
