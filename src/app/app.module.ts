// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


// Componentes
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { EntrantesComponent } from './components/menu/entrantes/entrantes.component';
import { CartComponent } from './components/cart/cart.component';

// Servicios
import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { GuardService } from './services/guard.service';

// Angular
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    JumbotronComponent,
    HomeComponent,
    LoginComponent,
    FoodMenuComponent,
    EntrantesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    FirebaseService,
    GuardService
  ],
  bootstrap: [AppComponent]
})




export class AppModule { }
