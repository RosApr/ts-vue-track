const mockjs = require("mockjs")
module.exports = mockjs.mock({
    "items|1-10": [
        {
            name: "@url",
            "pageId|+1": 1,
            "pv|1": ["--", "@natural(1, 100)"],
            "uv|1": ["--", "@natural(1, 100)"],
            "contribute|1-20": 1,
            "enterCount|1-20": 1,
            "exitCount|1-20": 1,
            "duration": "@time",
            "bounceRate|1": ["--", "@float(1, 50, 1, 1)"]
        }
    ]
})