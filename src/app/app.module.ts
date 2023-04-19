import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BookOrderComponent } from './book-order/book-order.component';
import { EventsComponent } from './events/events.component';
import { AdminComponent } from './admin/admin.component';
import { TitleComponent } from './title/title.component';
import { ImageSlideshowComponent } from './image-slideshow/image-slideshow.component';
import { InfoComponent } from './info/info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { EventDescriptionComponent } from './event-description/event-description.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BookOrderComponent,
    EventsComponent,
    AdminComponent,
    TitleComponent,
    ImageSlideshowComponent,
    InfoComponent,
    ContactInfoComponent,
    BoardOfDirectorsComponent,
    EventOverviewComponent,
    EventDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
