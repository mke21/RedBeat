// src/views/Fotos.js
import m from "mithril";
var Images = require("../models/Images").default;
var src = "";

export default {
	oninit: Images.loadList,
    view: function(){
        return [
				  m('h1', "Foto's"),
					m("div.container", [
						m("div.mySlides", {style: "with:100%;"}, [
							m("img", {src: "/slider/" + Images.current, style: "max-width:100%"} ),
						]),
						m("a", {class: "prev", onclick: function() {src = Images.previous()}}, 
						m("img", {src: "/images/prev.png"})),
						m("a", {class: "next", onclick: function() {src = Images.next()}}, 
						m("img", {src: "/images/next.png"})),

					])
        ]
    }
}

