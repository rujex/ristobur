import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HamburguesasComponent } from './hamburguesas.component';


const routes: Routes = [{
  path: '',
  component: HamburguesasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HamburguesasRoutingModule { }
