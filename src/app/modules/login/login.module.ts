import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    SignInComponent,
    ForgotPasswordComponent,
    SignUpComponent,
  ],
  imports: [LoginRoutingModule ,SharedModule ,ReactiveFormsModule ],
})
export class LoginModule {}
