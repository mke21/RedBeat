// src/views/BandLeden.js
var m = require("mithril").default

module.exports = {
    view: function() {
        return [
            m("h1", "De Bandleden"),
            m("img", {src: "/images/band.jpg", style: "max-width:100%;"})
        ]
    }
}
