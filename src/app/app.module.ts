import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BookOrderComponent } from './book-order/book-order.component';
import { EventsComponent } from './events/events.component';
import { AdminComponent } from './admin/admin.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { EventDescriptionComponent } from './event-description/event-description.component';
import { HomeImageSlideshowComponent } from './home-image-slideshow/home-image-slideshow.component';
import { HomeBoardOfDirectorsComponent } from './home-board-of-directors/home-board-of-directors.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminEventAddComponent } from './admin-event-add/admin-event-add.component';

import {FormsModule} from '@angular/forms';
import { AdminOrderListComponent } from './admin-order-list/admin-order-list.component';
import { AdminEventInfoComponent } from './admin-event-info/admin-event-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BookOrderComponent,
    EventsComponent,
    AdminComponent,
    ContactInfoComponent,
    EventOverviewComponent,
    EventDescriptionComponent,
    HomeImageSlideshowComponent,
    HomeBoardOfDirectorsComponent,
    HomeInfoComponent,
    HomeTitleComponent,
    AdminLoginComponent,
    AdminEventComponent,
    AdminOrderComponent,
    AdminEventAddComponent,
    AdminEventInfoComponent,
    AdminOrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
