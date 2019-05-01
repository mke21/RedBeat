// src/models/User.js
var m = require("mithril").default

var User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "/data/users.json",
            withCredentials: true,
        })
        .then(function(result) {
            User.list = result.data
        })
    },

    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            withCredentials: true,
        })
        .then(function(result) {
            User.current = User.list[id -1]
        })
    }
}

module.exports = User
