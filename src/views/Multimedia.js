// src/views/Multimedia.js
var m = require("mithril").default;
var Fotos = require("./Fotos");
var Music = require("./Mp3");

module.exports = {
    view: function(){
        return [
					m(Fotos),
					m(Music)
        ]
    }
}
