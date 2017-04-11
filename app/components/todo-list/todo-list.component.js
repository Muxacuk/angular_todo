"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var data_service_1 = require("../../services/data.service");
var TodoListComponent = (function () {
    function TodoListComponent(dataService) {
        this.dataService = dataService;
        this.todos = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getTodos().then(function (todos) { return _this.todos = todos; });
        console.log(this.dataService);
    };
    TodoListComponent.prototype.toogle = function (todo) {
        this.dataService.toogle(todo);
    };
    TodoListComponent.prototype.delete = function (todo) {
        this.dataService.delete(todo);
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        moduleId: module.id,
        providers: [data_service_1.DataService],
        styleUrls: ['todo-list.component.css'],
        templateUrl: 'todo-list.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map