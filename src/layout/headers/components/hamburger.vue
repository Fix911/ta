<template>
  <div
    class="collapse-btn"
    @click="handeHamburgerCollapse"
  >
    <svg-icon
      name="nav-collapsed"
      v-if="getCollapseState.getCollapseState"
    />
    <svg-icon
      name="nav-collapse"
      v-else
    />
  </div>
</template>
<script setup lang="ts">
import SvgIcon from '@/components/svgicon.vue'
import { useConsoleStore } from '@/store/console'
const getCollapseState = useConsoleStore()

const handeHamburgerCollapse = () => {
  getCollapseState.toggleCollapse()
}
</script>

  <style scoped lang="scss">
.collapse-btn {
  padding: 0 10px;
}
  </style>
