import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DiscutionComponent } from './components/discution/discution.component';
import { MessageComponent } from './components/message/message.component';
import { MessengerRoutingModule } from './messenger-routing.module';



@NgModule({
  declarations: [
    MessageComponent,
    DiscutionComponent
  ],
  imports: [
    CommonModule,
    MessengerRoutingModule,
    SharedModule
  ],
  exports: [
    DiscutionComponent,
    MessageComponent,
  ],
})
export class MessengerModule { }
