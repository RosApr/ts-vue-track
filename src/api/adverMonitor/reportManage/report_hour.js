const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*100)
module.exports = mockjs.mock({
    total: total,
    [`items|${total}`]: [
        {
            "click": 0,
            "ctr": "",
            date: "@date(yyyy-mm-dd)",
            hour: 14,
            id: "@natural",
            mediaAdspace: "欧洲",
            mediaChannel: "北京",
            mediaName: "优酷",
            show: 1,
            "tid|+1": 1,
        }
    ]
})