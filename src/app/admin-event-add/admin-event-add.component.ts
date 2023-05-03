import { Component, Input } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { DEFAULT_EVENT, Event } from '../data/Event';
import { DatabaseService } from '../database.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-event-add',
  templateUrl: './admin-event-add.component.html',
  styleUrls: ['./admin-event-add.component.css']
})
export class AdminEventAddComponent {

  event: Event = DEFAULT_EVENT

  showEventForm : boolean = false;
  eventErrorOccured : boolean = false;
  languageList : string[] = [];

  constructor(private dataservice : DatabaseService, private location: Location){}

  async onCreateEvent(title: string, description: string, address: string,  club:string, start:string, end:string){
      this.eventErrorOccured = false;
      const startDate = start ? new Date(start) : new Date (0);
      const endDate = end ? new Date(end) : new Date (0);
      const isLiteracyClubAttending = club ? "true" ?  true : false : false ;
      if (startDate.getFullYear() == 1970 || endDate.getFullYear() == 1970) this.eventErrorOccured = true;
      else {
        const event = await firstValueFrom(this.dataservice.addEventId({title, description, address, isLiteracyClubAttending, startDate, endDate}));
        this.event = event;
        await this.dataservice.addEvent(this.event).then(res => this.eventErrorOccured = !res);
      }
      this.location.back();
    }
  }

