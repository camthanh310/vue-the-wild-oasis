import axios, { type AxiosInstance } from 'axios'

const http: AxiosInstance = axios.create()

http.defaults.baseURL = `http://the-wild-oasis-api.test/api`
http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
http.defaults.headers.common['Content-Type'] = 'application/json'
http.defaults.headers.common['Accept'] = 'application/json'

http.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error)
  }
)
export default http
