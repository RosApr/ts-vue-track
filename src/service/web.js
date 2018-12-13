const $http = require('../assets/utils/request.ts')
// site
export const querySiteList = (params) => {
    return $http.get("/site/api/report", {
        params: params
    })
}
export const collectSiteToFavorite = (params) => {
    return $http.post("/site/api/sites/changeFavoriteSites", params)
}
//overview
export const queryOutlineOverview = (params) => {
    return $http.get("/site/api/report/overview/getOutline", {params: params})
}
export const queryTrendOverview = (params) => {
    return $http.get("/site/api/report/overview/getTimeTrendRpt", {params: params})
}
export const querySourceOverview = (params) => {
    return $http.get("/site/api/report/overview/getSourceSite", {params: params})
}
export const queryVisitOverview = (params) => {
    return $http.get("/site/api/report/overview/getVisitPage", {params: params})
}
export const queryLandingOverview = (params) => {
    return $http.get("/site/api/report/overview/getLandingPage", {params: params})
}
export const queryVisitorTyoeOverview = (params) => {
    return $http.get("/site/api/report/overview/getVisitorType", {params: params})
}
export const queryDistrictRptOverview = (params) => {
    return $http.get("/site/api/report/overview/getDistrictRpt", {params: params})
}
export const queryHeatmapKey = (params) => {
    return $http.get("/site/api/report/hq", {params: params})
}

// detail seperate by params type
export const queryWebDetail = (params) => {
    return $http.get("/site/api/report/detail", {params: params})
}
export const queryVisitorDetail = (params) => {
    return $http.get("/site/api/report/overview/getVisitorType", {params: params})
}
//event
export const queryEventRpt = (params) => {
    return $http.get("/site/api/report/overview/getEventsRpt", {params: params})
}
export const queryEventList = (params) => {
    return $http.get("/site/api/events", {params: params})
}
export const updateEvent = (methods, params) => {
    return $http.post(`/site/api/events/${methods}`, params)
}
export const changeEventStatus = (params) => {
    return $http.post("/site/api/events/changeStatus", params)
}
export const deleteEvent = (params) => {
    return $http.post("/site/api/events/del", params)
}
export const queryExactEventList = (params) => {
    return $http.get("/site/api/report/eventsList", params)
}
export const queryEventDetail = (params) => {
    return $http.get("/site/api/report/detail", params)
}
export const queryEventAttrs = (params) => {
    return $http.get("/site/api/events/attrs", params)
}
// site
export const querySiteManageList = (params) => {
    return $http.get("/site/api/sites/list", params)
}
export const querySiteManageCode = (params) => {
    return $http.get("/site/api/sites/getCode", params)
}
export const delSiteManage = (params) => {
    return $http.post("/site/api/sites/del", params)
}
export const execCodeSiteManage = (params) => {
    return $http.post("/site/api/sites/checks", params)
}
export const createSite = (params = {}) => {
    return $http.post("/site/api/sites/add", params)
}
export const updateSite = (params = {}) => {
    return $http.post("/site/api/sites/modify", params)
}