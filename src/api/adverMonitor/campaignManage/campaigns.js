const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*100) + 10
module.exports = mockjs.mock({
    total: total,
    [`items|${total}`]: [
        {
            "cid|+1": 1,
            name: "@ctitle",
            startDate: "@date(yyyy-MM-dd)",
            endDate: "@date(yyyy-MM-dd)",
            "trackMediaNumber|1": [1, 2, 3],
            "status|1": [2, 3],
            "created": "@date(yyyy-MM-dd HH:mm:ss)",
            "updated": "@date(yyyy-MM-dd HH:mm:ss)"
        }
    ]
})