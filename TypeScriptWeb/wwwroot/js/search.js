"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Search = /** @class */ (function () {
    function Search(http) {
        this.http = http;
    }
    Search.prototype.search = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (json) { return json.toString(); });
    };
    return Search;
}());
exports.Search = Search;
//# sourceMappingURL=search.js.map