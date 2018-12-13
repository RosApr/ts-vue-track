const mockjs = require("mockjs")
const total = Math.ceil(Math.random()*100)
module.exports = mockjs.mock({
    total: total,
    [`items|${total}`]: [
        {
            "appId|+1": 1,
            app_name: "@title", //应用名称
            data: [ // 数组按位分别对应 今日，昨日, 预计今日， 昨日此时，每日平均， 历史峰值
                {
                    new_user_count: "@natural(1,100)", //新用户数
                    user_count: "@natural(1,100)", //启动用户数
                    session_count: "@natural(1,100)", //累计启动用户
                    accumulative_user_count: "@natural(1,100)", //累计启动用户
                },
                {
                    new_user_count: "@natural(1,100)", //新用户数
                    user_count: "@natural(1,100)", //启动用户数
                    session_count: "@natural(1,100)", //累计启动用户
                    accumulative_user_count: "@natural(1,100)", //累计启动用户
                }
            ],
            tradeId: "1,101",
            "codeStatus|1": [0, 2],
            created: "@date(yyyy-MM-dd HH:mm:ss)",
            updated: "@date(yyyy-MM-dd HH:mm:ss)",
            "isFavorite|1": [0, 1] //收藏
        }
    ]
})