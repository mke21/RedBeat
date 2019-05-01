// src/views/Band.js
var m = require("mithril").default

module.exports = {
    view: function(){
        return [
            m("h1", "Over ons"),
            m("p", "RedBeat is een rockband met als basis Fijnaart. Wij spelen gitaar rock, van classic rock tot modern."),
            m("iframe", {
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/-JMOI1i5qSA",
                frameborder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: true
            })

        ]
    }
}
