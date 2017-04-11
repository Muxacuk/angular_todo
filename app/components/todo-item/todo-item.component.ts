import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Todo } from '../../shared/Todo';

@Component({
    selector: 'todo-item',
    moduleId: module.id,
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent{
    @Input() todo: Todo;
    @Output() toogle = new EventEmitter();
    @Output() delete = new EventEmitter();

    onToogle(){
        this.toogle.emit();
    }
    onDelete(){
        this.delete.emit();
    }
}