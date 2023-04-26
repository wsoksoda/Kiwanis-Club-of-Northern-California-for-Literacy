import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AdminComponent } from './admin/admin.component';
import { BookOrderComponent } from './book-order/book-order.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'events', component: EventsComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'order', component: BookOrderComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  title = "Kiwanis Club of Northern California Literacy";
  
 }
