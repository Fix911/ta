<template>
  <div class="navbar">
    <Hamburger />
    <Breadcrumb />
  </div>
</template>
<script setup lang="ts">
import Hamburger from './components/hamburger.vue'
import Breadcrumb from './components/breadcrumb.vue'
</script>

<style scoped lang="scss">
.navbar{
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    font-size: 22px;
    color: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,0.08);
    display: flex;
    align-items: center;
}
</style>
