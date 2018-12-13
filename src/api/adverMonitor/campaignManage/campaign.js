const mockjs = require("mockjs")
module.exports = mockjs.mock({
    "cid|1-10000": 1,
    name: "@ctitle",
    startDate: "@date(yyyy-MM-dd)",
    endDate: "@date(yyyy-MM-dd)",
    "trackMediaNumber|1": [1,2,3],
    status: 1,
    "created": "@date(yyyy-MM-dd HH:mm:ss)",
    "updated": "@date(yyyy-MM-dd HH:mm:ss)",
    "advertiser" : {
        "created" : "@date(yyyy-MM-dd HH:mm:ss)",
        "updated" : "@date(yyyy-MM-dd HH:mm:ss)",
        "id|1-1000" : 3,
        "name" : "@ctitle",
        "status" : 2,
        "handler" : {},
        "hibernateLazyInitializer" : {}
      },    
    region: {
        selected: ["CNGZ00", "CNXJ00", "CNGXFC", "CNGXBS", "CNGXYL", "CNCQ00"]
    },
    clickRate: [1, 2],
    frequency: 2
})