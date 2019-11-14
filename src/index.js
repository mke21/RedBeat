// src/index.js
//var m = require("mithril").default
import m from "mithril";
var Layout = require("./views/Layout").default;
var InnerLayout = require("./views/InnerLayout").default;
var Intro = require("./views/Intro").default;
var Band = require("./views/Band.js").default;
var SetList = require("./views/SetList").default;
var BandLeden = require("./views/BandLeden.js").default;
var Multimedia = require("./views/Multimedia.js").default;

m.route(document.body, '/home', {
    "/home": {
        render: function() {
            return m(Layout, m(Intro))
        }
    },
    "/band": {
        render: function(){
            return m(Layout, m(InnerLayout, m(Band)))
        }
    },
    "/bandleden": {
        render: function(){
            return m(Layout, m(InnerLayout, m(BandLeden)))
        }
    },
    "/setlist": {
        render: function(){
            return m(Layout, m(InnerLayout, m(SetList)))
        }
    },
    "/multimedia": {
        render: function(){
            return m(Layout, m(InnerLayout, m(Multimedia)))
        }
    }
})
