import { defineStore } from 'pinia'
import { getTokenByWechat } from '@/api/wechat'

export const tokenStore = defineStore('token', {
  state: () => ({
    token: ''
  }),
  getters: {},
  actions: {
    getToken (params:URLSearchParams) {
      const code = params.get('code') as string // 获取code
      const corpId = params.get('state') as string // 获取state
      if (this.token === '') {
        getTokenByWechat(code, corpId).then(res => {
          this.token = res.data.token
        })
      }
    }
  }
})
