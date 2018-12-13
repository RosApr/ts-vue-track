const mockjs = require("mockjs")

module.exports = mockjs.mock({
    campaign: {
        advertiser: {
            created: "@date(yyyy-MM-dd HH:mm:ss)",
            handler: {},
            id: "@natural(1-10000000)",
            name: "@title",
            status: 2,
            updated: "@date(yyyy-MM-dd HH:mm:ss)",
            hibernateLazyInitializer: {}
        },
        created: "@date(yyyy-MM-dd HH:mm:ss)",
        endDate: "@date(yyyy-MM-dd)",
        "cid": "@natural(1-10000000)",
        handler: {},
        hibernateLazyInitializer: {},
        name: "@title",
        startDate: "@date(yyyy-MM-dd)",
        status: 2,
        trackMediaNumber: 1,
        updated: "@date(yyyy-MM-dd HH:mm:ss)",
    },
    created: "@date(yyyy-MM-dd HH:mm:ss)",
    landingPage: () => {
        return "http://" + mockjs.Random.string("lower", 5,10) + ".com"
    },
    mediaAdspace: "@title",
    mediaChannel: "@title",
    mediaName: "@title",
    "platform|1": ["PC", "Mobile"],
    status: 0,
    tid: "@string('lower', 5)",
    updated: "@date(yyyy-MM-dd HH:mm:ss)",
    bl: {
        "deliveryType|1": [1, 2],
        "plans|3-20": [
            {
                date: "@date(yyyy-MM-dd)",
                time: ["@date(HH:mm:ss)", "@date(HH:mm:ss)"],
                budget: "@float(1,50,1, 1)"
            }
        ],
        trackClickUrl1: "http://t.eyangmedia.com/#/",
        trackShowUrl1: "http://t.eyangmedia.com/#/",
        trackClickUrl2: "",
        trackShowUrl2: ""
    }
})