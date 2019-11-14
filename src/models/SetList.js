// src/models/SetList.js
import m from "mithril";

var SetList = {
    list: [],
    loadList: function(){
        return m.request({
            method: "GET",
            url: "/data/setlist.json",
        })
            .then(function(result) {
                let data = result.data
                data.sort()
                SetList.list=data
            })
    }
}
export default SetList;
