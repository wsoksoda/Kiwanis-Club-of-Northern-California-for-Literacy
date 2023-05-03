import { Component, Input } from '@angular/core';
import { DatabaseService } from '../database.service';
import { DEFAULT_EVENT, Event } from '../data/Event';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent {
  constructor(private databaseService: DatabaseService, private location: Location) { }
  
  
  ngOnInit() {
    this.databaseService.getEvents().subscribe(
      (events) => this.events = events
    );
  }
  events: Event[] = []

  async delete(id: number) {
    await this.databaseService.deleteEvent(id);
    this.databaseService.getEvents().subscribe(
      (events) => this.events = events
    );
  }
}
