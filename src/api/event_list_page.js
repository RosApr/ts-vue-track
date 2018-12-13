const mockjs = require("mockjs")
module.export = mockjs.mock({
    "items|1-20": [
        {
            "name": "@ctitle",
            created: "@date(yyyy-MM-dd)",
            "status|1": [2, 3],
            "id|+1": 1,
            "attrs|8": [
                {
                    name: "@title",
                    "type|1": ["STRING", "NUMBER"]
                }
            ]
        }
    ]
})