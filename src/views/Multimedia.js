// src/views/Multimedia.js
var m = require("mithril").default;
var Fotos = require("./Fotos.js");

module.exports = {
    view: function(){
        return [
					m(Fotos),
        ]
    }
}
