

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './_services/_services/auth.service';
import { AuthGuard } from './_services/_services/auth_guard';
import { BaseRequestOptions } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RootRoutes } from './app.routing';
import { ChildRoutes } from './app.routing';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/RegistrationPage/RegistrationPage.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { Service1Component } from './components/service1/service1.component';
import { Service2Component } from './components/service2/service2.component';
import { Service3Component } from './components/service3/service3.component';
import { Service4Component } from './components/service4/service4.component';
import { vehicleComponent } from './components/dashboard/vehicle/vehicle.component';
import { UserComponent } from './components/dashboard/user/user.component';
import { LoginComponent } from './components/login/login.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA3zSEEVBXMl_bvPfB4t6N_smiKIbv2GQ4",
  authDomain: "vdms-af056.firebaseapp.com",
  databaseURL: "https://vdms-af056.firebaseio.com",
  projectID: "vdms-af056",
  storageBucket: "vdms-af056.appspot.com",
  messagingSenderId: "496756107343"
}

@NgModule({

  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    DashboardComponent,
    HomeComponent,
    RegistrationComponent,
    WelcomeComponent,
    AboutComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    UserComponent,
    vehicleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpModule,
    RootRoutes,
    ChildRoutes,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
