import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DiscutionComponent } from './components/discution/discution.component';

const routes: Routes = [
  { path: 'messenger', component: DiscutionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessengerRoutingModule {}
