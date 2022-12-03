import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './btn/btn.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    BtnComponent,
    InputComponent,
    CheckboxComponent,
    LogoComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BtnComponent,
    InputComponent,
    CheckboxComponent,
    LogoComponent,
  ],
})
export class SharedModule {}
