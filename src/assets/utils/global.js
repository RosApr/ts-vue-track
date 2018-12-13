import json2csv from 'json2csv';
export default {
    install(Vue, options) {
        /* 全局状态 */
        Vue.prototype.$m_status = {
            "正常": 2,
            "停止": 3
        }
		Vue.prototype.setIsBLROLEToCookie = function() {
            const roleGroup = Vue.prototype.$cookie.get("ROLE") ? Vue.prototype.$cookie.get("ROLE").split("|") : []
            let flag = +false
            if(!!roleGroup && roleGroup.length > 0) {
                flag = +roleGroup.includes("ROLE_BL")
            }
            this.$cookie.set("isBLRole", flag)
        }
        Vue.prototype.$calculateAvgDuration = (itemArray) => {
            let len = itemArray.length
            let totalDuration = itemArray.reduce((prev, curr) => {
                const prevArr = prev.split(":")
                const currArr = curr.split(":")
                let ss = Number(prevArr[2]) + Number(currArr[2])
                let s = ss % 60 < 10 ? "0" + ss % 60 : ss % 60
                let mm = Number(prevArr[1]) + Number(currArr[1]) + (ss >= 60 ? parseInt(ss / 60) : 0)
                let m = mm % 60 < 10 ? "0" + mm % 60 : mm % 60
                let hh = Number(prevArr[0]) + Number(currArr[0]) + (mm >= 60 ? parseInt(mm / 60) : 0)
                let h = hh < 10 ? "0" + hh : hh
                return `${h}:${m}:${s}`
            }, "00:00:00").split(":").map(item => Number(item))
            return totalDuration.map((item, index) => {
                let avg = Math.floor((item)/len)
                if(index >= 1) {
                    // minute | second
                    avg += Math.floor(totalDuration[index - 1]/len - parseInt(totalDuration[index - 1]/len)) * 60
                }
                return avg < 10 ? ("0"+avg) : avg
            }).join(":")
        }

        /* 报表默认日期范围, 默认最近三天*/
        Vue.prototype.$m_reportDateRange = [Vue.prototype.$moment().subtract(4, 'days').format("YYYY-MM-DD"), Vue.prototype.$moment().subtract(1, 'days').format("YYYY-MM-DD")];

        /* element-ui table formatter */
        Vue.prototype.$m_tableTimeFormatter = function (row, column) {
            var date = row[column.property];
            if (date == undefined) {
                return "";
            }
            return Vue.prototype.$moment(date).format("YYYY-MM-DD HH:mm:ss");
        }

        // status format
        Vue.prototype.$m_tableStatusFormatter = (row, column) => {
            return Object.keys(Vue.prototype.$m_status).filter(field => {
                if (Vue.prototype.$m_status[field] === row.status) {
                    return field;
                }
            })
        }

        // number format
        Vue.prototype.$m_tableNumberFormatter = (row, column) => {
            var number = row[column.property];
            return Vue.prototype.$accounting.formatNumber(number);
        }

        // money format
        Vue.prototype.$m_tableMoneyFormatter = (row, column) => {
            var income = row[column.property];
            return Vue.prototype.$accounting.formatMoney(income, "￥");
        }

        /* 计算报表中的ctr、cpm、cpc、填充率等数据 */
        Vue.prototype.$m_tableFillRateFormatter = (row, column) => {
            if(row.request == 0) return "0.00%";
            return Vue.prototype.$accounting.toFixed(row.show / row.request * 100, 2) + "%";
        }

        Vue.prototype.$m_tableCtrFormatter = (row, column) => {
            if(row.show == 0) return "0.00%";
            return Vue.prototype.$accounting.toFixed(row.click / row.show * 100, 2) + "%";
        }

        Vue.prototype.$m_tableCpmFormatter = (row, column) => {
            if(row.show == 0) return "0￥";
            return Vue.prototype.$accounting.formatMoney(row.income / row.show * 1000, "￥");
        }

        Vue.prototype.$m_tableCpcFormatter = (row, column) => {
            if(row.click == 0) return "0￥";
            return Vue.prototype.$accounting.formatMoney(row.income / row.click, "￥");
        }

        Vue.prototype.$m_export = (fileName, data, fields, fieldNames) => {
            console.log("export");
            var link = document.createElement("a");
            var result = json2csv({ data: data, fields: fields, fieldNames: fieldNames });
            // 为了使Excel以utf-8的编码模式，同时也是解决中文乱码的问题
            var _utf = "\ufeff";
            // 使用blob解决大文件下载问题，dataURI过大会超出浏览器限制
            var blob = new Blob([_utf + result], { type: 'text/csv' });
            link.setAttribute("href", URL.createObjectURL(blob));
            link.setAttribute("download", fileName);
            document.body.appendChild(link); // Required for FF
            link.click();
            document.body.removeChild(link); // Required for FF
        }

        // 服务器响应状态 2xx
        Vue.prototype.$m_res_suc = () => {
            Vue.prototype.$message({ message: '操作成功', type: 'success' });
        }

        // 服务器响应状态 4xx、5xx
        Vue.prototype.$m_res_err = (status) => {
            Vue.prototype.$message.error(`操作失败，服务器内部错误，状态：${status}`);
        }

        var list=[];
        Vue.prototype.$m_setCheckList = (rows) => {
            list=rows;
            console.log(list);
            // return Vue.prototype.$accounting.toFixed(row.click / row.show * 100, 2) + "%";
        }
        Vue.prototype.$m_getCheckList = list;
    }
}
