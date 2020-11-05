import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent} from "./user/user.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EventListComponent} from "./event-list/event-list.component";
import {EventComponent} from "./event/event.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'user', component: UserComponent },
  { path: 'event', component: EventListComponent},
  { path: 'event/:id', component: EventComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
