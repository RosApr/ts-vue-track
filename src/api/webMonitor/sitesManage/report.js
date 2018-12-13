const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*100)
module.exports = mockjs.mock({
    total: total,
    [`items|${total}`]: [
        {
            "siteId|+1": 1,
            url: "@url",
            "homePage": "@ctitle",
            name: "@ctitle",
            "tradeId": "1,101",
            "status|1": [0, 1],
            "isFavorite|1": [0, 1],
            "reports|3": [
                {
                    "pv|1": ["--", "@natural(1, 100)"],
                    "uv|1": ["--", "@natural(1, 100)"],
                    "ipCount|1": ["--", "@natural(1, 100)"],
                    "duration|1": ["--", "@natural(1, 100)"],
                    "bounceRate|1": ["--", "@float(1, 50, 1, 1)"]
                }
            ]
        }
    ]
})