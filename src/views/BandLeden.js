// src/views/BandLeden.js
import m from "mithril";

export default {
    view: function() {
        return [
            m("h1", "De Bandleden"),
            m("img", {src: "/images/band.jpg", style: "max-width:100%;"})
        ]
    }
}
