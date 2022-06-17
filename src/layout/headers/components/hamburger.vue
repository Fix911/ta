<template>
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
</template>
<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/svgicon.vue'
const collapse = ref(false)
</script>
