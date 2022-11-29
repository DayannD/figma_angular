import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UiModule } from '../ui/ui.module';
import { TemplateModule } from '../template/template.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { EbooksModule } from '../ebooks/ebooks.module';
import { FilesModule } from '../files/files.module';
import { SettingModule } from '../setting/setting.module';
import { ActivityModule } from '../activity/activity.module';
import { RouterModule } from '@angular/router';
import { MessengerModule } from '../messenger/messenger.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    UiModule,
    MessengerModule,
    TemplateModule,
    DashboardModule,
    EbooksModule,
    FilesModule,
    SettingModule,
    ActivityModule,
  ]

})
export class CoreModule { }
