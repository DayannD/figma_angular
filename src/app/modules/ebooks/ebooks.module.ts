import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbooksRoutingModule } from './ebooks-routing.module';
import { EbooksComponent } from './components/ebooks/ebooks.component';


@NgModule({
  declarations: [
    EbooksComponent
  ],
  imports: [
    CommonModule,
    EbooksRoutingModule
  ]
})
export class EbooksModule { }
