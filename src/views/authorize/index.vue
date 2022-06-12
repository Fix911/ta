<template>
  <div>查询并授权..... 请稍等</div>
</template>
<script setup lang="ts">
import { useToken } from '@/store/authorization'

import { onMounted } from 'vue'
const token = useToken()
const params = new URLSearchParams(window.location.search)

onMounted(() => {
  token.getToken(params)
})
</script>
