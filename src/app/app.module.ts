import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { HttpClientModule } from '@angular/common/http';
import { NewComponent } from './new/new.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DemoComponent,
    Demo2Component,
    NewComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
