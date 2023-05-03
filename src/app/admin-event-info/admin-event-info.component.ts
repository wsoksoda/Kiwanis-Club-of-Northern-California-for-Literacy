import { Component, Input } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../data/Event';
import { Location } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-admin-event-info',
  templateUrl: './admin-event-info.component.html',
  styleUrls: ['./admin-event-info.component.css']
})
export class AdminEventInfoComponent {

  event?: Event;

  constructor(private databaseService: DatabaseService, private route: ActivatedRoute, private location: Location) {
    this.databaseService.getEvents().pipe(
      map(events => events.filter(event => event.id === Number(this.route.snapshot.paramMap.get('id')))[0])
    ).subscribe(event => this.event = event);
  }

  save() {
    this.databaseService.updateEvent(this.event!);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

}
