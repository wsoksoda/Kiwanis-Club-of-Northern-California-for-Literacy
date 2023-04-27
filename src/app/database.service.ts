import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DEFAULT_EVENT, Event } from './data/Event';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  eventsUrl: string = this.makeUrl('events.json');
  languagesUrl: string = this.makeUrl('languages.json');

  makeUrl(ext: string): string {
    return 'https://books-fcda8-default-rtdb.firebaseio.com/' + ext;
  }

  constructor(private http: HttpClient) {
    this.addEvent(DEFAULT_EVENT);
    this.getEvents().subscribe(data => console.log(data));
    this.getLanguages().subscribe(data => console.log(data));
  }
  
  addEvent(newEvent: Event): void {
    this.getEvents().pipe(
      map(events => events ? events.map(event => event.id) : [])
    ).subscribe(eventIds => {
      if (!eventIds.includes(newEvent.id)) {
        this.http.post(this.eventsUrl, newEvent).subscribe();
      }
    });
  }

  getEvents(): Observable<Event[]> {
    return this.http.get(this.eventsUrl).pipe(
      map(data => data ? Object.keys(data).map(key => data[key as keyof typeof data] as unknown as Event) : [])
    );
  }

  getLanguages(): Observable<string[]> {
    return this.http.get<string[]>(this.languagesUrl);
  }

}
