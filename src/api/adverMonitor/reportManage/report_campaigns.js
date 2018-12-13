const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*100)
module.exports = mockjs.mock({
    total: total,
    [`items|10`]: [
        {
            "cid|+1": 1,
            "date": "@date(yyyy-MM-dd)",
            "click|1": ["--", "@natural(1, 100)"],
            "show|1": ["--", "@natural(1, 100)"],
            "name": "@title"
        }
    ],
    totalShows:2000,
    totalClicks:1000
})