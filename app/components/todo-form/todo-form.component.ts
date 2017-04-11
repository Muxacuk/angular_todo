import { Component, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Todo } from '../../shared/Todo';

@Component({
    selector: 'todo-form',
    moduleId: module.id,
    providers: [ DataService ],
    styleUrls: ['todo-form.component.css'],
    templateUrl: 'todo-form.component.html'
})
export class TodoFormComponent{
    newTitle: string;
    constructor(private dataService: DataService){}

    addTodo(){
        this.dataService.add( new Todo(this.newTitle) );
        this.newTitle = '';
        console.log(this);
    }
}