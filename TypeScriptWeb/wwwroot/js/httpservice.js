"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FetchHttpService = /** @class */ (function () {
    function FetchHttpService() {
    }
    FetchHttpService.prototype.get = function (path) {
        return fetch(path)
            .then(function (response) { return response.json(); });
    };
    return FetchHttpService;
}());
exports.FetchHttpService = FetchHttpService;
//# sourceMappingURL=httpservice.js.map