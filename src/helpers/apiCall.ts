import axios, { AxiosInstance, AxiosResponse } from 'axios'
export const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const instance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

export const apiCall = {
  get: call('GET'),
  post: call('POST'),
  put: call('PUT'),
  delete: call('DELETE'),
}

function call(name: string) {
  return async function (url: string, body: object | string, option: boolean = false) {
    const config = { name, url, data: body }
    try {
      const res = await instance.request(config)
      return handleResponse(res)
    } catch (error) {
      throw error
    }
  }
}

function handleResponse(res: AxiosResponse) {
  return res
}
