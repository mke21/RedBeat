// src/views/Fotos.js
var m = require("mithril").default
import { slider } from 'mithril-slider';

export default {
    view: function(){
        return [
            m("h1", "Foto's"),
            m(slider, {
                pageData: () => {
                    m.request({
                        method: 'GET',
                        url: '/data/images.json',
                        background: false
                    })
                },
                page: () => {
                    const currentIndex = opts.currentIndex;
                    const listIndex = opts.listIndex;
                    const data = opts.data;
                    const style = (Math.abs(currentIndex - listIndex) < 2)
                          ? { backgroundImage: `url(${data})` }
                          : null;
                    return m('.page', {
                        style: style
                    });}
            })
        ]
    }
}
