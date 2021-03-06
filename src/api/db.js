module.exports = {
    "advs": require("./adverMonitor/advsManage/advs"),
    "adv_detail": require("./adverMonitor/advsManage/adv_detail"),
    "campaigns": require("./adverMonitor/campaignManage/campaigns"),
    "campaign": require("./adverMonitor/campaignManage/campaign"),
    "web_report": require("./webMonitor/sitesManage/report"),
    "event_attr_list": require("./event_attr_list"),
    "event_list_page": require("./event_list_page"),
    "hq": require("./hq"),
    "detail_trend": require("./webMonitor/detail/trend"),
    "detail_trend_chart": require("./webMonitor/detail/trend_chart"),
    "detail_visit": require("./webMonitor/detail/visit"),
    "detail_area": require("./webMonitor/detail/area"),
    "detail_area_chart": require("./webMonitor/detail/area_chart"),
    "detail_eventRpt": require("./webMonitor/detail/eventRpt"),
    "overview_getEventsRpt": require("./webMonitor/overview/getEventsRpt"),
    "overview_getTimeTrendRpt": require("./webMonitor/overview/getTimeTrendRpt"),
    "overview_getSourceSite": require("./webMonitor/overview/getSourceSite"),
    "overview_getVisitPage": require("./webMonitor/overview/getVisitPage"),
    "overview_getVisitorType": require("./webMonitor/overview/getVisitorType"),
    "overview_getLandingPage": require("./webMonitor/overview/getLandingPage"),
    "overview_getDistrictRpt": require("./webMonitor/overview/getDistrictRpt"),
    "overview_getOutline": require("./webMonitor/overview/getOutline"),
    "sites_changeFavoriteSites": require("./webMonitor/sitesManage/sites_changeFavoriteSites"),
    "sites_getCode": require("./webMonitor/sitesManage/sites_getCode"),
    "sites_list": require("./webMonitor/sitesManage/sites_list"),
    "sites_add": require("./webMonitor/sitesManage/sites_add"),
    "sites_modify": require("./webMonitor/sitesManage/sites_modify"),
    "sites_del": require("./webMonitor/sitesManage/sites_del"),
    "sites_check": require("./webMonitor/sitesManage/sites_check"),
    "report_campaigns": require("./adverMonitor/reportManage/report_campaigns"),
    "report_campaigns_monitoring_points": require("./adverMonitor/campaignManage/monitoringPoints.js"),
    "tracks": require("./adverMonitor/reportManage/tracks"),
    "copy_tracks": require("./adverMonitor/reportManage/copy_tracks"),
    "report_chart_tracks_hour": require("./adverMonitor/reportManage/report_chart_tracks_hour"),
    "report_chart_tracks_date": require("./adverMonitor/reportManage/report_chart_tracks_date"),
    "report_hour": require("./adverMonitor/reportManage/report_hour"),
    "report_region": require("./adverMonitor/reportManage/report_region"),
    "report_history": require("./adverMonitor/reportManage/report_history"),
    "logout": require("./logout")
}