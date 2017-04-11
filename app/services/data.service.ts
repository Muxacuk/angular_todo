import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { data } from '../shared/data';
import { Todo } from '../shared/Todo';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService{
    todos: Todo[] = [];
    id: number;
    private apiUrl = 'api/todos';

    constructor( private http: Http ){
        this.id = Math.random();
    }

    getTodos(): Promise<Todo[]> {
        // return this.http.get(this.apiUrl)
        //     .toPromise()
        //     .then( res =>  res.json().data )
        //     .then( todos => {
        //         this.todos = todos;
        //         console.log(this);
        //         return this.todos;       
        //     } );
        return Promise.resolve(this.todos);
    }
    delete(todo: Todo){
        let headers = new Headers({ 'Content-Type': 'application/json' }),
            options = new RequestOptions({ headers });

        let index = this.todos.indexOf(todo);

        if(index !== -1){
            this.todos.splice(index, 1);
        }
    }
    toogle(todo: Todo){
        todo.done = !todo.done;
    }
    add(todo: Todo){
        // let headers = new Headers({ 'Content-Type': 'application/json' }),
        //     options = new RequestOptions({ headers });
            
        // this.http.post(this.apiUrl, todo, options)
        //     .toPromise()
        //     .then(res => res.json().data)
        //     .then(todo => this.todos.push(todo));
        // console.log(this);
        this.todos.push(todo);
    }
}