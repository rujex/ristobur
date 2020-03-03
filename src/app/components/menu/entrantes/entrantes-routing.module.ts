import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrantesComponent } from './entrantes.component';


const routes: Routes = [{
  path: '',
  component: EntrantesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrantesRoutingModule { }
