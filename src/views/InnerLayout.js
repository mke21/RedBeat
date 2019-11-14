// src/views/InnerLayout.js
import m from "mithril";

export default {
    view: function(vnode) {
        return m(".content",
                 m("div", {id: "content"}, vnode.children)
        )
    }
}
