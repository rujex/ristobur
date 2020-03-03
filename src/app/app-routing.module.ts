import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardService } from './shared/guards/guard.service';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'login',
	 	loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'registro',
		loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule)
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
