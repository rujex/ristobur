import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { EntrantesComponent } from './components/menu/entrantes/entrantes.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
	{
		path: '',
		component: HomeComponent 
	},
	{
		path: 'login',
	 	component: LoginComponent
	},
	{
		path: 'registro',
		component: RegisterComponent
	},
	{
		path: 'menu',
		component: FoodMenuComponent
	},
	{
		path: 'Entrantes',
		component: EntrantesComponent
	},
	{
		path: 'cart',
		component: CartComponent
	},
	{
		path: '**',
		redirectTo: ''
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
