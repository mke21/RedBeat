// src/models/Images.js
var m = require("mithril").default

var Images = {
    list: [],
	  counter: 0,
	  current: "",
    loadList: function() {
        return m.request({
            method: "GET",
            url: "/images/slider/images.json",
            withCredentials: true,
        })
        .then(function(result) {
            Images.list = result;
					Images.counter = 0;
					Images.current = Images.list[0];
        })
    },
		next: function() {
			if (Images.counter == Images.list.length -1) {
				Images.counter = 0;
			} else {
				Images.counter +=1
			}
			console.log(Images.counter);
			Images.current = Images.list[Images.counter];
    },
		previous: function() {
			if (Images.counter == 0) {
				Images.counter = Images.list.length -1;
			} else {
				Images.counter -=1
			}
			Images.current = Images.list[Images.counter];

		}

}

module.exports = Images;
