const mockjs = require("mockjs")

module.exports = mockjs.mock({
    "items|1-10": [
        {
            area: () => {
                let randomProvince = mockjs.Random.province()
                if(randomProvince.indexOf("省") > 0 || randomProvince.indexOf("市") > 0) {
                    randomProvince = randomProvince.slice(0, -1)
                }
                return randomProvince
            },
            "pv|1": ["--", "@natural(1, 100)"],
            "rate|1": ["--", "@float(1, 50, 1, 2)"]
        }
    ]
})