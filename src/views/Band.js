// src/views/Band.js
var m = require("mithril").default

module.exports = {
    view: function(){
        return [
            m("h1", "Over ons"),
            m("p", "RedBeat is een rockband met als basis Fijnaart. Wij spelen gitaar rock, van classic rock tot modern"),
            m("p", "U kunt kontakt met ons opnemen via facebook"),
            m("ul.linklist", [
                m("li", m("a", {href: "https://www.facebook.com/RedBeatBand" ,target: "blank"},
                          m("img", {src: "/images/facebook.png"}))),
                m("li", m("a", {href: "https://www.youtube.com/channel/UCY2VOtxSpLbKI0zZuDi8KJg" ,target: "blank"},
                          m("img", {src: "/images/youtube.png"})))
            ]),
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
