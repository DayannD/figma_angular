import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)
  },
  {
    path: 'ebooks',
    loadChildren: () => import('./ebooks/ebooks.module').then(m => m.EbooksModule)
  },
  {
    path: 'messenger',
    loadChildren: () => import('./messenger/messenger.module').then(m => m.MessengerModule)
  },
  {
    path: 'files',
    loadChildren: () => import('./files/files.module').then(m => m.FilesModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  },
  // {
  //   path: '**',
  //   loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  // },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
