import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnsaladasComponent } from './ensaladas.component';


const routes: Routes = [{
  path: '',
  component: EnsaladasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnsaladasRoutingModule { }
