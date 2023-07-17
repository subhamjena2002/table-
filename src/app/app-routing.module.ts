import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { NewComponent } from './new/new.component';
import { PaginatorComponent } from './paginator/paginator.component';

const routes: Routes = [
  {path:'table' , component:TableComponent},
  {path:'demo' , component:DemoComponent},
  {path:'demo2' , component:Demo2Component},
  {path:'new' , component:NewComponent},
  {path:'page' , component:PaginatorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
