import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/guard/auth-guard.guard';

import { LayoutComponent } from './layout/layout/layout.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    canLoad : [AuthGuardGuard],
    component: LayoutComponent,
    loadChildren: () =>
     import('./modules/main.module').then((m) => m.MainModule),
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
