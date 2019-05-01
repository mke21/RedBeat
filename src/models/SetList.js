// src/models/SetList.js
var m = require("mithril").default

var SetList = {
    list: [],
    loadList: function(){
        return m.request({
            method: "GET",
            url: "/data/setlist.json",
        })
            .then(function(result) {
                let data = result.data
                data.sort()
                SetList.list=data
            })
    }
}

module.exports = SetList
