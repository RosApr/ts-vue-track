const mockjs = require("mockjs")

module.exports = mockjs.mock({
    pageSum: {
        "pv|1": ["--", "@natural(1, 100)"],
        "uv|1": ["--", "@natural(1, 100)"],
        "ipCount|1": ["--", "@natural(1, 100)"],
        "averageDuration": "@time",
        "bounceRate|1": ["--", "@float(1, 50, 1, 1)"]
    },
    "items|1-10": [{
        area: "@region",
        "pv|1": ["--", "@natural(1, 100)"],
        "uv|1": ["--", "@natural(1, 100)"],
        "ipCount|1": ["--", "@natural(1, 100)"],
        "averageDuration": "@time",
        "bounceRate|1": ["--", "@float(1, 50, 1, 1)"]
    }]
})