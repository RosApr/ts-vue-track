const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*100)
module.exports = mockjs.mock({
    total: total,
    [`items|${total}`]: [
        {
            "siteId|+1": 1,
            url: "@url",
            name: "@title",
            homePage: "@url",
            status: 2,
            tradeId: "1,101",
            "codeStatus|1": [0, 2],
            created: "@date(yyyy-MM-dd HH:mm:ss)",
            updated: "@date(yyyy-MM-dd HH:mm:ss)",
            "isFavorite|1": [0, 1]
        }
    ]
})