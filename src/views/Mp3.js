// src/views/Fotos.js
var m = require("mithril").default;
var music = "05-All_Over_You.mp3";


module.exports = {
    view: function(){
        return [
          m("h1", "Demo"),
					m("audio", {controls: true}, [
						m('source', {src:"music/" +music, type: "audio/mpeg"})
					])
        ]
    }
}
