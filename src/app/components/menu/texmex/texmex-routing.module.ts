import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TexmexComponent } from './texmex.component';


const routes: Routes = [{
  path: '',
  component: TexmexComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TexmexRoutingModule { }
