const mockjs = require("mockjs")

module.exports = mockjs.mock({
    "total": 4,
    pageSum: {
        "pv|1": ["--", "@natural(1, 100)"],
        "uv|1": ["--", "@natural(1, 100)"],
        "ipCount|1": ["--", "@natural(1, 100)"],
        "averageDuration": "@time",
        "bounceRate|1": ["--", "@float(1, 50, 1, 1)"],
        "duration": "--"
    },
    sum: {
        "pv|1": ["--", "@natural(1, 100)"],
        "uv|1": ["--", "@natural(1, 100)"],
        "ipCount|1": ["--", "@natural(1, 100)"],
        "averageDuration": "@time",
        "bounceRate|1": ["--", "@float(1, 50, 1, 1)"],
        "duration": "--"
    },
    "items|4": [
        {
            "date":"23:00-23:59",
            "pv|1": ["--", "@natural(1, 100)"],
            "uv|1": ["--", "@natural(1, 100)"],
            "ipCount|1": ["--", "@natural(1, 100)"],
            "averageDuration|1": ["--", "@natural(1, 100)"],
            "bounceRate|1": ["--", "@float(1, 50, 1, 1)"],
            "duration": "--"
        }
    ]
})