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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.todos = [];
        this.apiUrl = 'api/todos';
        this.id = Math.random();
    }
    DataService.prototype.getTodos = function () {
        // return this.http.get(this.apiUrl)
        //     .toPromise()
        //     .then( res =>  res.json().data )
        //     .then( todos => {
        //         this.todos = todos;
        //         console.log(this);
        //         return this.todos;       
        //     } );
        return Promise.resolve(this.todos);
    };
    DataService.prototype.delete = function (todo) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }), options = new http_1.RequestOptions({ headers: headers });
        var index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    };
    DataService.prototype.toogle = function (todo) {
        todo.done = !todo.done;
    };
    DataService.prototype.add = function (todo) {
        // let headers = new Headers({ 'Content-Type': 'application/json' }),
        //     options = new RequestOptions({ headers });
        // this.http.post(this.apiUrl, todo, options)
        //     .toPromise()
        //     .then(res => res.json().data)
        //     .then(todo => this.todos.push(todo));
        // console.log(this);
        this.todos.push(todo);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map