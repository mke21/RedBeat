// src/views/SetList.js
import m from "mithril";
var SetList = require("../models/SetList").default;

export default {
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
