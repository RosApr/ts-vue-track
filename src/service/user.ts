const $http = require('../assets/utils/request.ts')
//登录 & 登出
export const login = (params?: object) => {
    return $http.post("/api/login", params)
}
export const logout = () => {
    return $http.get("/api/logout")
}
// 广告主
export const queryAdvList = (params: object) => {
    return $http.get("/api/advs", { params })
}
export const delAdv = (advId: string | number) => {
    return $http.delete(`/api/advs/${advId}`)
}
export const queryAdvDetail = (advId: string | number) => {
    return $http.get(`/api/advs/${advId}`)
}
export const updateAdv = (id: string | number, params?: object) => {
    return $http.post(`/api/advs/${id}`, params)
}