import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataBaseService } from './services/db.service';

import { TodoItemComponent, TodoListComponent, TodoFormComponent } from './components/index';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule, 
        HttpModule, 
        InMemoryWebApiModule.forRoot(InMemoryDataBaseService) 
    ],
    declarations:[ 
        AppComponent, 
        TodoItemComponent,
        TodoListComponent,
        TodoFormComponent
    ],
    providers: [ DataService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}