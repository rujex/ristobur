import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolloComponent } from './pollo.component';


const routes: Routes = [{
  path: '',
  component: PolloComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolloRoutingModule { }
