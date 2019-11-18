	// src/views/Band.js
	import m from "mithril";

	export default {
			view: function(){
					return [
							m("h1", "Over ons"),
							m("p", "Rode bieten met stevige bite, wij zijn RedBeat! Een rock coverband uit West-Brabant. Wij spelen gitaar rock, van classic tot modern, van mainstream tot alternative. Met twee gitaren, bas, drum en zang: een garantie voor een avond volop genieten!"),
							m("p", [
								"U kunt contact met ons opnemen via facebook.",
								m("li", {href: "https://www.facebook.com/RedBeatBand" ,target: "blank"},
									m("img", {src: "/images/facebook.png"}))
							] ),
            /*m("iframe", {
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/-JMOI1i5qSA",
                frameborder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: true
            })*/
                        m("img", {src: "/images/band.jpg", style: "max-width:100%;"})

        ]
    }
}
