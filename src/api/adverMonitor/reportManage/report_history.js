const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*100)
module.exports = mockjs.mock({
    total: total,
    [`items|${total}`]: [
        {
            "click": "@natural(1,100)",
            ctr: "0%",
            "id|+1": 1,
            mediaAdspace: "非洲",
            mediaChannel: "北京",
            mediaName: "腾讯",
            show: "@natural(1,100)",
            tid: "@word",
            unique_click: "@natural(1,50)",
            unique_show: "@natural(1,50)",
        }
    ]
})