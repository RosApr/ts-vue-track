const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*20)
module.exports = mockjs.mock({
    total: total,
    [`items|${total}`]: [
        {
            "eventId|+1": 1,
            date: "@date(yyyy-MM-dd)",
            "pv|1": ["--", "@natural(1, 100)"],
            "uv|1": ["--", "@natural(1, 100)"],
            "avgpv|1": ["--", "@natural(1, 100)"],
        }
    ]
})