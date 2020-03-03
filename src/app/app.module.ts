// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { JumbotronComponent } from './shared/components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { EntrantesComponent } from './components/menu/entrantes/entrantes.component';
import { CartComponent } from './components/cart/cart.component';

// Servicios
import { AuthService } from './shared/services/auth.service';
import { FirebaseService } from './shared/services/firebase.service';
import { GuardService } from './shared/guards/guard.service';

// Angular
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';



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
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
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
