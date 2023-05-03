import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DEFAULT_ORDER, Order, PartialOrder } from '../data/Order';
import { DEFAULT_EVENT, Event, PartialEvent } from '../data/Event'
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-book-order',
  templateUrl: './book-order.component.html',
  styleUrls: ['./book-order.component.css']
})
export class BookOrderComponent implements OnInit {

  constructor(private dataservice : DatabaseService){}

  order : Order = DEFAULT_ORDER;
  event : Event = DEFAULT_EVENT;
  showEventForm : boolean = false;
  orderErrorOccured : boolean = false;
  eventErrorOccured : boolean = false;
  success : boolean = false;
  languageList : string[] = [];

  ngOnInit(): void {
      this.dataservice.getLanguages().subscribe(l => this.languageList = l);
  }

  async addOrder(books: string, ageLower : string, ageUpper : string, language : string, address : string, delivery : string, email : string){
    this.orderErrorOccured = false;
    const numBooks = books ? parseInt(books) : -1;
    const lower = ageLower ? parseInt(ageLower) : -1;
    const upper = ageUpper ? parseInt(ageUpper) : 19;
    const deliveryDate = delivery ? new Date(delivery) : new Date(0);
    if (numBooks == -1 || lower == -1 || upper == 19 || deliveryDate.getFullYear() == 1970) {this.orderErrorOccured = true; this.success=false;}
    else {
      const order = await firstValueFrom(this.dataservice.addOrderId({numBooks, ageLower : lower, ageUpper : upper, language, address, email, deliveryDate}));
      this.order = order;
      this.dataservice.addOrder(this.order).then(res => this.orderErrorOccured = !res);
      this.success=true;
    }
  }

  async addEvent(title : string, description : string, address : string, club : string, start : string, end : string){
    this.eventErrorOccured = false;
    const startDate = start ? new Date(start) : new Date (0);
    const endDate = end ? new Date(end) : new Date (0);
    const isLiteracyClubAttending = club ? "true" ?  true : false : false ;
    if (startDate.getFullYear() == 1970 || endDate.getFullYear() == 1970) {this.eventErrorOccured = true; this.success=false;}
    else {
      const event = await firstValueFrom(this.dataservice.addEventId({title, description, address, isLiteracyClubAttending, startDate, endDate}));
      this.event = event;
      this.dataservice.addEvent(this.event).then(res => this.eventErrorOccured = !res);
      this.success=true;
    }
  }

}
