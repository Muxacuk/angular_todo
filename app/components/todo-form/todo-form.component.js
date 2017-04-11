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
var Todo_1 = require("../../shared/Todo");
var TodoFormComponent = (function () {
    function TodoFormComponent(dataService) {
        this.dataService = dataService;
    }
    TodoFormComponent.prototype.addTodo = function () {
        this.dataService.add(new Todo_1.Todo(this.newTitle));
        this.newTitle = '';
        console.log(this);
    };
    return TodoFormComponent;
}());
TodoFormComponent = __decorate([
    core_1.Component({
        selector: 'todo-form',
        moduleId: module.id,
        providers: [data_service_1.DataService],
        styleUrls: ['todo-form.component.css'],
        templateUrl: 'todo-form.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], TodoFormComponent);
exports.TodoFormComponent = TodoFormComponent;
//# sourceMappingURL=todo-form.component.js.map