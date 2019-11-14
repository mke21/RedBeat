// src/views/Fotos.js
import m from "mithril";
var music = "05-All_Over_You.mp3";

export default {
    view: function(){
        return [
          m("h1", "Demo"),
					m("audio", {controls: true}, [
						m('source', {src:"music/" +music, type: "audio/mpeg"})
					])
        ]
    }
}
