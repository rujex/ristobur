import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { EntrantesComponent } from './components/menu/entrantes/entrantes.component';
import { CartComponent } from './components/cart/cart.component';
import { GuardService } from './services/guard.service';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) 
	},
	{
		path: 'login',
	 	loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'registro',
		loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
	},
	{
		path: 'menu',
		loadChildren: () => import('./components/food-menu/food-menu.module').then(m => m.FoodMenuModule),
		canActivate: [GuardService]
	},
	{
		path: 'Entrantes',
		loadChildren: () => import('./components/menu/entrantes/entrantes.module').then(m => m.EntrantesModule)
	},
	{
		path: 'cart',
		loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule)
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
