// src/views/Fotos.js
var m = require("mithril").default;
var Images = require("../models/Images");
var src = "";


module.exports = {
	oninit: Images.loadList,
    view: function(){
        return [
          m("h1", "Fotos"),
          m("img", {src: "/images/slider/" + Images.current, style: "max-width:100%"} ),
					m("button", {onclick: function() {src = Images.next()} }, "next"),
					m("button", {onclick: function() {src = Images.previous()}}, "previous")
        ]
    }
}
