import Axios from 'axios'
import {
    Loading
} from "element-ui"

const request = Axios.create()
let loadingInstance: any
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    loadingInstance = Loading.service({
        text: "加载中...",
        fullscreen: true,
        lock: true
    })
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
})
request.interceptors.response.use(function (response) {
    // Do something with response data
    loadingInstance.close()
    return Promise.resolve(response.data)
}, function (error) {
    loadingInstance.close()
    // Do something with response error
    if(error.response.status === 401){
        return window.location.href = window.location.origin + "/#/login"
    }
    return Promise.reject(error)
})

request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

export default request