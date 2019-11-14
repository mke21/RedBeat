// src/views/Fotos.js
import m from "mithril";
var music = "05-All_Over_You.mp3";

export default {
    view: function(){
        return [
          m("h1", "Demo"),
					m("figcaption", 'All over you (2019)'),
					m("audio", {id: "demo1", controls: true}, [
						m('source', {src:"music/" +music, type: "audio/mpeg"})
					])
        ]
    }
}
