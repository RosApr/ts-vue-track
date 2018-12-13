const $http = require('../assets/utils/request.ts')
// 活动
export const queryCampaignList = (params) => {
    return $http.get("/api/campaigns", {params: params})
}
export const deleteCampaign = (needDeletCampaignCid) => {
    return $http.delete(`/api/campaigns/${needDeletCampaignCid}`)
}
export const updateCampaign = (cid="", params) => {
    return $http.post(`/api/campaigns/${cid}`, params)
}
export const queryCampaignDetail = (campaignCid) => {
    return $http.get(`/api/campaigns/${campaignCid}`)
}
// 报表
export const queryReportList = (params) => {
    return $http.get("/api/report/campaigns", { params: params })
}

export const queryHourReport = (params) => {
    return $http.get("/api/report/tracks", { params: params })
}
export const queryHourChartReport = (params) => {
    return $http.get("/api/report/chart/tracks", { params: params })
}
export const queryTrackDetail = (trackId = "", params = {}) => {
    return $http.get(`/api/tracks/${trackId}`, {params: params})
}
export const updateTrackDetail = (trackId = "", params = {}) => {
    return $http.post(`/api/tracks/${trackId}`, params)
}
export const copyTrack = (params = {}) => {
    return $http.post("/api/tracks/copy", params)
}
export const updateTrackSingleItem = (params = {}) => {
    return $http.post("/api/tracks/media/update", params)
}
export const delTrack = (trackId) => {
    return $http.delete(`/api/tracks/${trackId}`)
}
export const updateTrackBlStatus = (params = {}) => {
    return $http.post("/api/tracks/bl/status", params)
}