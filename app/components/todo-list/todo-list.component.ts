import { Component, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Todo } from '../../shared/Todo'

@Component({
    selector: 'todo-list',
    moduleId: module.id,
    providers: [ DataService ],
    styleUrls: ['todo-list.component.css'],
    templateUrl: 'todo-list.component.html'
})
export class TodoListComponent{
    todos: Todo[];

    constructor(private dataService: DataService){
        this.todos = [];
    }

    ngOnInit(){
        this.dataService.getTodos().then(todos => this.todos = todos);
        console.log(this.dataService);
    }
    
    toogle(todo: Todo){
        this.dataService.toogle(todo);
    }
    delete(todo: Todo){
        this.dataService.delete(todo);
    }
}