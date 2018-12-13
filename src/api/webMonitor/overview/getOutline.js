const mockjs = require("mockjs")

module.exports = mockjs.mock({
        "items|3": [
            {
                "pv|1": ["--", "@natural(1, 100)"],
                "uv|1": ["--", "@natural(1, 100)"],
                "ipCount|1": ["--", "@natural(1, 100)"],
                "duration": "@time",
                "bounceRate|1": ["--", "@float(1, 50, 1, 1)"]
            }
        ]
})