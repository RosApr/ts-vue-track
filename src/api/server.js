const jsonServer = require('json-server')
const pause = require("connect-pause")
// const path = require("path")
const server = jsonServer.create()
const db = require('./db.js')
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()
server.use(pause(1000))
server.use((req, res, next) => {
    // login middleware
    console.log(req.path)
    console.log(req.query)
    console.log(req.body)
    console.log(req.method)
    if (req.method == 'POST') {
        if(req.path == '/api/login') {
            return res.status(200).cookie("ROLE", "ROLE_BL|ROLE_xx|ROLE_yy").json({ errcode: 0 })
        } else if(req.path.indexOf("/site/api/events/") >= 0) {
            return res.status(200).json({ id: 0 })
        }
        if(req.path == '/api/tracks/bl/status') {
            return res.status(200).json({id: 0})
        }
        req.method = "GET"
        req.query = ""
    }
    // if(req.path == "/api/advs") {
    //     return res.status(401).json({})
    // }
    if(req.method == "DELETE") {
        if(req.path.indexOf("/api/campaigns/") >= 0) {
            return res.status(200).json({ errcode: 0 })
        }
        if(req.path.indexOf("/api/advs") >= 0) {
            return res.status(200).json({ errcode: 0 })
        }
    }
    if(req.path.indexOf("/api/track") >= 0 && !req.query["pageSize"]) {
        return res.status(200).json(router.db.get("report_campaigns_monitoring_points").value())
    }
    if(req.path =="/site/api/report/detail"){
        if(req.query.type) {
            return res.status(200).json(router.db.get(`detail_${req.query.type}`).value())    
        }
    }
    if(req.path =="/api/report/tracks"){
        console.log(req.query.type)
        switch(req.query.type) {
            case "hour":
                return res.status(200).json(router.db.get("report_hour").value())
                break
            case "region":
                return res.status(200).json(router.db.get("report_region").value())
                break
            case "history":
                return res.status(200).json(router.db.get("report_history").value())
                break
        }
    }
    if(req.path =="/api/report/chart/tracks"){
        if(req.query.type) {
            return res.status(200).json(router.db.get(`report_chart_tracks_${req.query.type}`).value())    
        }
    }
    // else if(req.path =="/"){
    //     return res.status(200).json(router.db.get(`heatmap`).value()) 
    // }
    next()
})

server.use(middlewares)
server.use(jsonServer.rewriter({
    // "/api/report/chart/tracks\\?type=:type": "/report_chart_tracks_:type",
    "/api/report/*": "/report_$1",
    "/api/campaigns/:id": "/campaign",
    "/api/tracks/copy": "/copy_tracks",
    "/api/tracks/export": "/export_tracks",
    "/api/tracks/media/update": "/update_tracks",
    "/api/advs/*": "/adv_detail",
    "/api/*": "/$1",
    "/site/api/sites/*": "/sites_$1",
    "/site/api/report/overview/*": "/overview_$1",
    // "/site/api/report/detail\\?type=:type": "/detail_:type",
    "/site/api/report/hq": "/hq",
    "/site/api/events\\?siteId=:siteId": "/event_list_page",
    "/site/api/events/attrs*": "/event_attr_list",
    "/site/api/*": "/web_$1",
}))

server.use(router)
server.listen(3000)