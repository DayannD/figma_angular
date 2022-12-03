import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout/layout.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  {
     path: '', component: LayoutComponent,
     loadChildren: () =>
      import('./modules/main.module').then((m) => m.MainModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
   },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
