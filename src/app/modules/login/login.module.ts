import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [
    SignInComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
  ],
  imports: [LoginRoutingModule ,SharedModule ],
})
export class LoginModule {}
