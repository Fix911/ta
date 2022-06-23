<template>
  <el-avatar :src="circleUrl" />
</template>
<script setup lang="ts">
import { useToken } from '@/store/authorization'
import { ref } from 'vue'
const token = useToken()
const circleUrl = ref(token.GetAvator)
</script>
