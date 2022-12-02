import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './btn/btn.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LogoComponent } from './logo/logo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BtnComponent,
    InputComponent,
    CheckboxComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    BtnComponent,
    InputComponent,
    CheckboxComponent,
    LogoComponent,
  ]
})
export class SharedModule { }
