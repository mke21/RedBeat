// src/index.js
var m = require("mithril").default

var UserList = require("./views/UserList")
var UserForm = require("./views/UserForm")
var Layout = require("./views/Layout")
var InnerLayout = require("./views/InnerLayout")
var Intro = require("./views/Intro")

var Band = require("./views/Band.js")
var SetList = require("./views/SetList")
var BandLeden = require("./views/BandLeden.js")
var Multimedia = require("./views/Multimedia.js")

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
    },
})
