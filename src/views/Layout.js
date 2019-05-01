// src/views/Layout.js
var m = require("mithril").default

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m("label", {for:"show-menu", class: "show-menu"}, "Show Menu"),
            m("input", {type: "checkbox", id:"show-menu", role: "button"}), 
            m("ul", {id: "menu"}, [
                m("li.menuitem",m("a", {href: "/home", oncreate: m.route.link}, "Home")),
                m("li.menuitem", m("a", {href: "/band", oncreate: m.route.link}, "De Band")),
                m("li.menuitem", m("a", {href: "/bandleden", oncreate: m.route.link}, "Bandleden")),
                m("li.menuitem", m("a", {href: "/setlist", oncreate: m.route.link}, "Setlist")),
                m("li.menuitem", m("a", {href: "/fotos", oncreate: m.route.link}, "Foto's")),
                m("li.menuitem", m("a", {href: "/contact", oncreate: m.route.link}, "Contact"))
            ]),
            m("section", vnode.children)
        ])
    }
}
