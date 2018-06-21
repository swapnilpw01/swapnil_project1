import {NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { Bookcomponent } from './books.component';

@NgModule({
            //All modules declare here
            imports:[
                BrowserModule
            ],
            //All component and pipes declare here
            declarations:[
                AppComponent,
                Bookcomponent
            ],
            //only main component declare here
            bootstrap:[
                AppComponent
            ],
            // All services declare here 
            providers:[]

})

export class AppModule{

}