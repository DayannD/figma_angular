import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UiModule } from '../ui/ui.module';
import { MessengerModule } from '../messenger/messenger.module';
import { TemplateModule } from '../template/template.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    UiModule,
    MessengerModule,
    TemplateModule,
  ]

})
export class CoreModule { }
