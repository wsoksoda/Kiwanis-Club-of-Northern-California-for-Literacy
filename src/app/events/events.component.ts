import { Component } from '@angular/core';
import { Event } from '../data/Event';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor(private databaseService: DatabaseService) {}
  ngOnInit() {
    this.databaseService.getEvents().subscribe(
      (events) => this.events = events
  );
}
  events: Event[] = []

}
