import axios, { AxiosRequestConfig } from 'axios'

const service = axios.create({
  baseURL: 'https://wx.njtsm.com/',
  timeout: 5000
})

service.interceptors.request.use(function (config) {
//   const { accessToken } = storeToRefs(tokenStore())
//   if (accessToken.value !== '') {
//       config.headers!.Authorization = 'Bearer ' + accessToken.value
//   }
  /*
    * 向服务器存储文件时添加的头文件(服务器文件存储由阿里云oss替代)
    */
  // if (config.url?.includes(import.meta.env.VITE_API_UPLOAD_URL)) {
  //   config.headers!['content-type'] = 'multipart/form-data'
  // }
  // 统一设置用户身份认证
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 统一处理接口返回的响应错误。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default <T = any> (config:AxiosRequestConfig) => {
  return service(config).then((result) => {
    return result.data as T
  })
}
