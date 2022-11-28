import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { DiscutionComponent } from './components/discution/discution.component';



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
