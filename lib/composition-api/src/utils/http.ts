import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { httpErrorHandler } from './error'

const http: AxiosInstance = axios.create({
  baseURL: (() => {
    return window.commonUtils.URL || ''
  })(),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Cache-Control': 'no-cache'
  }
})

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = JSON.parse(sessionStorage.getItem('access_token') as string) || null
    if (token) {
      config.headers.Authorization = `${token.type} ${token.value}`
    }

    console.group('%c Request Success', 'color:#35495E; font-size:16px; font-weight:bold;')
    console.log(`%c [${config.method?.toLocaleUpperCase()}] ${config.baseURL}${config.url}`, 'font-size:12px;')
    console.dir(config.headers)
    config.data && console.dir(config.data)
    console.groupEnd()

    return config
  },
  (error: AxiosError) => {
    console.log('%c Request Fail: ', 'color:#EC6060; font-weight:bold;', JSON.stringify(error, undefined, 4))
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response: AxiosResponse) => {
    console.group('%c Response Success', 'color:#42b883; font-size:16px; font-weight:bold;')
    console.log(
      `%c [${response.config.method?.toLocaleUpperCase()}] ${response.config.baseURL}${response.config.url}`,
      'font-size:12px;'
    )
    console.log(`%c Status: ${response.status}`, 'font-size:12px;')
    console.log(`%c StatusText: ${response.statusText}`, 'font-size:12px;')
    response.data && console.dir(response.data)
    console.groupEnd()

    return response
  },
  (error: AxiosError) => {
    console.log('%c Response Fail: ', 'color:#EC6060; font-weight:bold;', JSON.stringify(error, undefined, 4))

    httpErrorHandler(error)
    return Promise.reject(error)
  }
)

export default http
