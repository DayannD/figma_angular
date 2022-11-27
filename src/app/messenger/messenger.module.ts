import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { DiscutionComponent } from './discution/discution.component';



@NgModule({
  declarations: [
    MessageComponent,
    DiscutionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiscutionComponent,
    MessageComponent,
  ]
})
export class MessengerModule { }
