import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';  

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { PageNotFoundComponent } from  './NotFound.component' 


const appRoutes: Routes = [ 
   { path: 'User', component: UsersComponent }, 
   { path: 'Customer', component: CustomersComponent },
   { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, UsersComponent, CustomersComponent,PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
