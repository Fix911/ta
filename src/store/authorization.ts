import { defineStore } from 'pinia'
import { getTokenByWechat } from '@/api/wechat'

export const useToken = defineStore('authorization', {
  state: () => ({
    token: '',
    userName: '',
    userId: '',
    company: '',
    companyId: ''
  }),
  getters: {},
  actions: {
    getToken (params:URLSearchParams) {
      const code = params.get('code') as string // 获取code
      const corpId = params.get('state') as string // 获取state
      if (this.token === '') {
        getTokenByWechat(code, corpId).then(res => {
          this.token = res.data.token
          this.userName = res.data.teacher.name
          this.company = res.data.teacher.company.name
          this.companyId = res.data.teacher.company.corpId
          this.userId = res.data.teacher.id
          console.log(res.data)
        })
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [{
      key: 'authorization',
      storage: sessionStorage,
      paths: ['token', 'userName', 'company', 'companyId', 'userId']
    }]
  }
})