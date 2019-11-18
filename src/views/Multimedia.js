// src/views/Multimedia.js
import m from "mithril";
var Fotos = require("./Fotos").default;
var Music = require("./Mp3").default;

export default {
    view: function(){
        return [
					m(Fotos),
					m(Music),
					m("div", [
						m("h1", "Youtube"),
						m("p", "Vindt meer multimedia op ons Youtube kanaal"),
          m("a", {href: "https://www.youtube.com/channel/UCY2VOtxSpLbKI0zZuDi8KJg" ,target: "blank"},
                          m("img", {src: "/images/youtube.png"}))
					])
        ]
    }
}
