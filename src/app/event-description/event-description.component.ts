import { Component, Input } from '@angular/core';
import { Event, DEFAULT_EVENT } from '../data/Event';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.css']
})
export class EventDescriptionComponent {
  @Input() event: Event = DEFAULT_EVENT
}
