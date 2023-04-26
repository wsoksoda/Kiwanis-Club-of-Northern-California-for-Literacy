import { Component } from '@angular/core';
import { Event } from '../data/Event';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  constructor() {}
  ngOnInit() {}

  //will be replaced once services have been implemented
  events: Event[] = [
  {
    id: 0,
    title: 'Elementary Book Swap',
    description: 'We are exited to announce that Lincoln ELementary will be doing a book swap event with Kiwanis Club of Nothern California for Literacy providing free books while they last!',
    address: '100 1st street N, Maple Road, CA, 55110',
    isLiteracyClubAttending: true,
    startDate: new Date(2024, 0o1, 0o2, 17, 0, 0, 0),
    endDate: new Date(2024, 0o1, 0o2, 20, 0, 0, 0),
  },
  {
    id: 1,
    title: 'Library Closing Giveaway',
    description: 'We need to give away some books, extra books will be provided.',
    address: '1200 11th ave NW, Maple Lake, NV, 34571',
    isLiteracyClubAttending: false,
    startDate: new Date(2025, 0o5, 0o4, 0, 0, 0, 0),
    endDate: new Date(2025, 0o5, 0o4, 24, 0, 0, 0),
  },
]
}
