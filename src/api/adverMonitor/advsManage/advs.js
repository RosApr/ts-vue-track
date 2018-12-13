const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*100)
module.exports = mockjs.mock({
    total: total,
    [`items|${total}`]: [
        {
            "id|+1": 1,
            name: "@ctitle",
            "created": "@date(yyyy-MM-dd HH:mm:ss)",
            "upadted": "@date(yyyy-MM-dd HH:mm:ss)"
        }
    ]
})