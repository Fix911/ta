import request from '@/utilities/request'
import type { Data } from './type/wechat'
import Result from './type/result'

export const getTokenByWechat = (code:string, corpId:string) => {
  return request<Result<Data>>({
    method: 'GET',
    url: 'wechat/token',
    params: {
      code,
      corpId
    }
  })
}
