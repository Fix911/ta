<template>
  <div class="xiaoxi">
    <span> 登录页面</span>
    <a href="/console">控制台</a> <br>
    <a href="/schedule">授权页面</a> <br>
    <svg-icon
      name="xiaoxi"
    />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svgicon.vue'
</script>

<style>
.xiaoxi{
  height: 100vh;
  font-size: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
