// src/views/Layout.js
var m = require("mithril").default


module.exports = {
    view: function(vnode, name="") {
        return m("main.layout", [
            m("nav", [
                m("label", {for:"show-menu", class: "show-menu"}, "Show Menu"),
                m("input", {type: "checkbox", id:"show-menu", role: "button"}), 
                m("ul", {id: "menu"}, [
                    m("li.menuitem",  {id: "home"}, m("a", {href: "/home", oncreate: m.route.link}, "Home")),
                    m("li.menuitem", {id: "band"}, m("a", {href: "/band", oncreate: m.route.link}, "De Band")),
                    m("li.menuitem", {id: "bandleden"}, m("a", {href: "/bandleden", oncreate: m.route.link}, "Bandleden")),
                    m("li.menuitem", {id: "setlist"}, m("a", {href: "/setlist", oncreate: m.route.link}, "Setlist")),
                    m("li.menuitem", {id: "fotos"}, m("a", {href: "/fotos", oncreate: m.route.link}, "Foto's")),
                ]),
            ]),
            m("section", vnode.children)
        ])
    }
}
