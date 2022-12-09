import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BtnComponent } from './btn/btn.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { LogoComponent } from './logo/logo.component';
import { InputWithOutNgFormComponent } from './input-with-out-ng-form/input-with-out-ng-form.component';

@NgModule({
  declarations: [
    BtnComponent,
    InputComponent,
    CheckboxComponent,
    LogoComponent,
    InputWithOutNgFormComponent,
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
    InputWithOutNgFormComponent,
  ],
})
export class SharedModule {}
