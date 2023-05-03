import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AdminComponent } from './admin/admin.component';
import { BookOrderComponent } from './book-order/book-order.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminEventAddComponent } from './admin-event-add/admin-event-add.component';
import { AdminEventInfoComponent } from './admin-event-info/admin-event-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'events', component: EventsComponent},
  { path: 'add-events', component: AdminEventAddComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'order', component: BookOrderComponent},
  { path: 'edit-event/:id', component: AdminEventInfoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  title = "Kiwanis Club of Northern California Literacy";
  
 }
