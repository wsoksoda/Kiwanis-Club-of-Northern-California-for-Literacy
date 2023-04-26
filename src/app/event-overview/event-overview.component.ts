import { Component, Input } from '@angular/core';
import { DEFAULT_EVENT, Event } from '../data/Event';

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.css']
})
export class EventOverviewComponent {
  @Input() event: Event = DEFAULT_EVENT

  isExpanded = false;
}
