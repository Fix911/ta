<template>
  <div class="navbar">
    <div
      class="collapse-btn"
    >
      <svg-icon
        name="nav-collapsed"
        v-if="collapse"
      />
      <svg-icon
        name="nav-collapse"
        v-else
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/svgicon.vue'

const collapse = ref(false)
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
