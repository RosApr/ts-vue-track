const mockjs = require("mockjs")

module.exports = mockjs.mock({
        "items|2": [
            {
                "visitorCount|1": ["--", "@natural(1, 100)"],
                "pv|1": ["--", "@natural(1, 100)"],
                "uv|1": ["--", "@natural(1, 100)"],
                "ipCount|1": ["--", "@natural(1, 100)"],
                "averageVisitDuration": "@time",
                "averageVisitPage|1": ["--", "@float(1, 50, 1, 1)"],
                "bounceRate|1": ["--", "@float(1, 50, 1, 1)"],
                "rate|1-50.2": 1
            }
        ]
})