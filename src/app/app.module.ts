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
    HomeTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
