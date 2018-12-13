const mockjs = require("mockjs")

module.exports = mockjs.mock({
    "items|1-20" :[
        {
            "date|+1": ["18:00-18:59", "19:00-19:59", "20:00-20:59", "21:00-21:59", "22:00-22:59", "23:00-23:59"],
            "pv|1": ["--", "@natural(1, 100)"],
            "uv|1": ["--", "@natural(1, 100)"],
            "ipCount|1": ["--", "@natural(1, 100)"],
            averageDuration: "@time",
            "bounceRate|1": ["--", "@float(1, 50, 1, 1)"]
        }
    ]
})