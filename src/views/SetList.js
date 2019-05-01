// src/views/SetList.js
var m = require("mithril").default
var SetList = require("../models/SetList")

module.exports = {
    oninit: SetList.loadList,
    view: function() {
        return [
            m("h1", "Setlist"),
              m(".setlist", m("ul", SetList.list.map(function(song) {
                  return m("p", song)
              })))
        ]
    }
}
