import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataBaseService implements InMemoryDbService{
     
     constructor(){}

     createDb() {
        const todos = [
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

        return { todos: todos }
     }
}