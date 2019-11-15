// src/views/Fotos.js
import m from "mithril";
var Images = require("../models/Images").default;
var src = "";

/*export default {
	oninit: Images.loadList,
    view: function(){
        return [
          m("h1", "Fotos"),
          m("img", {src: "/slider/" + Images.current, style: "max-width:100%"} ),
					m("p"),
					m("button", {onclick: function() {src = Images.next()} }, "next"),
					m("button", {onclick: function() {src = Images.previous()}}, "previous")
        ]
    }
}*/
export default {
	oninit: Images.loadList,
    view: function(){
        return [
					m("div.container", [
						m("div.mySlides", {style: "with:100%;"}, [
							m("img", {src: "/slider/" + Images.current, style: "max-width:100%"} ),
						]),
						m("a", {class: "prev", onclick: function() {src = Images.previous()}}, "<"),
						m("a", {class: "next", onclick: function() {src = Images.next()} }, ">")
					])
        ]
    }
}


/*export default {
	oninit: Images.LoadList,
	view: function() {
		return [
			m('div.container', [
				m("img", {src: "/slider/" + Images.current, style: "max-width:100%"} ),
				m("a", {class: 'slgprev w3-text-white', onclick: function() {src = Images.previous()}}, "<")
			])
		]
	}
}
*/
