import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EbooksComponent } from './components/ebooks/ebooks.component';

const routes: Routes = [
  {path : 'ebooks', component:EbooksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbooksRoutingModule { }
