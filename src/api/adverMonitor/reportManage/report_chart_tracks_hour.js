const mockjs = require("mockjs")
const data = mockjs.mock({
    "items|1-10": [
        {
            type: "hour",
            "hour|1-24": 1,
            "tid|+1": 1,
            "show|1-1000": 1,
            "click|1-1000": 1,
            mediaName: "@title"
        }
    ]
})
module.exports = data.items