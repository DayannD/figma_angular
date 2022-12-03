import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'activity',
    loadChildren: () =>
      import('./activity/activity.module').then((m) => m.ActivityModule),
  },
  {
    path: 'ebooks',
    loadChildren: () =>
      import('./ebooks/ebooks.module').then((m) => m.EbooksModule),
  },
  {
    path: 'messenger',
    loadChildren: () =>
      import('./messenger/messenger.module').then((m) => m.MessengerModule),
  },
  {
    path: 'files',
    loadChildren: () =>
      import('./files/files.module').then((m) => m.FilesModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./setting/setting.module').then((m) => m.SettingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
