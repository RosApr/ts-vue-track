const mockjs = require("mockjs")
module.exports = mockjs.mock({
    "items|1-10": [
        {
            siteHref: "@url",
            "pv|1": ["--", "@natural(1, 100)"],
            "rate|1": ["--", "@float(1, 50, 1, 2)"]
        }
    ]
})