import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent, // landing page
  },
  {
    path: 'register',
    component: RegisterComponent, // register page
  },
  {
    path: 'login',
    component: LoginComponent, //Login Page
  },
  {
    path: 'create',
    component: CreateComponent, // Fantasy Team Search and Team View
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
