// src/views/Multimedia.js
import m from "mithril";
var Fotos = require("./Fotos").default;
var Music = require("./Mp3").default;

export default {
    view: function(){
        return [
					m(Fotos),
					m(Music)
        ]
    }
}
