import { AuthService } from './_services/_services/auth.service';
import { AuthGuard } from './_services/_services/auth_guard';


import { UserComponent } from './components/dashboard/user/user.component';
import { vehicleComponent } from './components/dashboard/vehicle/vehicle.component';

import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, } from '@angular/router';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/RegistrationPage/RegistrationPage.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { Service1Component } from './components/service1/service1.component';
import { Service2Component } from './components/service2/service2.component';
import { Service3Component } from './components/service3/service3.component';
import { Service4Component } from './components/service4/service4.component';



export const RootRoutes = RouterModule.forRoot([{path: '', component: WelcomeComponent}]);

export const ChildRoutes: ModuleWithProviders = RouterModule.forChild([
        {path: 'register', component: RegistrationComponent},
        {path: 'login', component: LoginComponent},
        {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
        {path:'about', component:AboutComponent},
        {path:'home', component:HomeComponent},
        {path:'service_name1',component:Service1Component},
        {path:'service_name2',component:Service2Component},
        {path:'service_name3',component:Service3Component},
        {path:'service_name4',component:Service4Component},
        { path: 'vehicle', component:vehicleComponent, canActivate: [AuthGuard] },
        { path: 'user', component:UserComponent, canActivate: [AuthGuard] },
]);