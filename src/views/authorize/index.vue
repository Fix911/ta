<template>
  <div>正在进行用户查询 ...... 请稍等</div>
</template>
<script setup lang="ts">
import { useToken } from '@/store/authorization'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const token = useToken()
const params = new URLSearchParams(window.location.search)
const roter = useRouter()
token.getToken(params)
onMounted(() => {
  token.$subscribe(() => {
    console.log('token changed', token.GetToken)
    if (token.GetToken) {
      roter.push('/console')
    }
  })
})

</script>
