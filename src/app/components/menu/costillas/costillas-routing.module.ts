import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostillasComponent } from './costillas.component';


const routes: Routes = [{
  path: '',
  component: CostillasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostillasRoutingModule { }
