// src/views/InnerLayout.js
var m = require("mithril").default

module.exports = {
    view: function(vnode) {
        return m(".content",
                 m("div", {id: "content"}, vnode.children)
        )
    }
}
