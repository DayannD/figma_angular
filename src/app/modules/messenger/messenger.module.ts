import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';
import { DiscutionComponent } from './components/discution/discution.component';
import { MessengerRoutingModule } from './messenger-routing.module';



@NgModule({
  declarations: [
    MessageComponent,
    DiscutionComponent
  ],
  imports: [
    CommonModule,
    MessengerRoutingModule,
  ],
  exports: [
    DiscutionComponent,
    MessageComponent,
  ]
})
export class MessengerModule { }
