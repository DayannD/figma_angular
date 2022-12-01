import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SignInComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
  ]
})
export class LoginModule { }
