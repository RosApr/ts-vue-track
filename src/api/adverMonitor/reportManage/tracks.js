const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*100)
module.exports = mockjs.mock({
    total: total,
    [`items|${total}`]: [
        {
            "hour|1-24": 1,
            "tid|+1": 1,
            "mediaName": "爱奇艺",
            "mediaChannel": "爱奇艺电视剧频道",
            "mediaAdspace": "15s前贴片",
            "click|1": ["--", "@natural(1, 100)"],
            "show|1": ["--", "@natural(1, 100)"],
            "unique_show|1-10000": 1,
            "unique_click|1-10000": 1,
            "name": "北京市",
            "platform|1": ["PC", "Mobile"],
            "blStatus|1": [2,3]
        }
    ]
})