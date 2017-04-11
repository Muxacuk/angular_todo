"use strict";
var InMemoryDataBaseService = (function () {
    function InMemoryDataBaseService() {
    }
    InMemoryDataBaseService.prototype.createDb = function () {
        var todos = [
            {
                id: 1,
                title: 'Fix errors in this app',
                done: true
            },
            {
                id: 2,
                title: 'Push this project on github',
                done: false
            }
        ];
        return { todos: todos };
    };
    return InMemoryDataBaseService;
}());
exports.InMemoryDataBaseService = InMemoryDataBaseService;
//# sourceMappingURL=db.service.js.map