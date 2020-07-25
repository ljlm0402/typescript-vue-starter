import { AxiosError } from 'axios'

/* eslint-disable */
export const httpErrorHandler = (error: AxiosError): void => {
  let message = ''
  if (error.response) {
    message = error.response.data
  } else {
    message = error.message
  }

  if (error.response && [400].indexOf(error.response.status) !== -1) {
    console.error('[ERROR] 400')
    return
  }

  if (error.response && [401].indexOf(error.response.status) !== -1) {
    console.error('[ERROR] 401')
    return
  }

  if (error.response && [403].indexOf(error.response.status) !== -1) {
    console.error('[ERROR] 403')
    sessionStorage.clear()
    return
  }

  if (error.response && [404, 500].indexOf(error.response.status) !== -1) {
    console.error('[ERROR] 404 or 500')
    return
  }

  if (message) {
    alert('Connection Fail\nErrorCode: ' + error.name + '\nErrorMessage : ' + error.message)
    return
  }
}
