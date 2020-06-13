"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var search_1 = require("./search");
var httpservice_1 = require("./httpservice");
window.onload = function () {
    var clickmebtton = document.getElementById("button");
    var result = document.querySelector('.result');
    var search = new search_1.Search(new httpservice_1.FetchHttpService());
    clickmebtton.onclick = function () {
        return search.search().then(function (res) {
            debugger;
            result.innerHTML = res.toString();
        });
    };
    console.log('clicked');
};
//# sourceMappingURL=app.js.map