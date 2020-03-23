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
		path: 'TexMex',
		loadChildren: () => import('./components/menu/texmex/texmex.module').then(m => m.TexmexModule)
  },
  {
		path: 'Carnes',
		loadChildren: () => import('./components/menu/carnes/carnes.module').then(m => m.CarnesModule)
  },
  {
		path: 'Costillas',
		loadChildren: () => import('./components/menu/costillas/costillas.module').then(m => m.CostillasModule)
  },
  {
		path: 'Ensaladas',
		loadChildren: () => import('./components/menu/ensaladas/ensaladas.module').then(m => m.EnsaladasModule)
  },
  {
		path: 'Hamburguesas',
		loadChildren: () => import('./components/menu/hamburguesas/hamburguesas.module').then(m => m.HamburguesasModule)
  },
  {
		path: 'Pollo',
		loadChildren: () => import('./components/menu/pollo/pollo.module').then(m => m.PolloModule)
  },
  {
		path: 'Postres',
		loadChildren: () => import('./components/menu/postres/postres.module').then(m => m.PostresModule)
  },
  {
		path: 'Sandwiches',
		loadChildren: () => import('./components/menu/sandwiches/sandwiches.module').then(m => m.SandwichesModule)
  },
	{
		path: 'cart',
		loadChildren: () => import('./components/cart/cart.module').then(m => m.CartModule),
    canActivate: [GuardService]
  },
  {
    path: 'news',
    loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule)
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
