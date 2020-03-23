import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandwichesComponent } from './sandwiches.component';


const routes: Routes = [{
  path: '',
  component: SandwichesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandwichesRoutingModule { }
