import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event, PartialEvent } from './data/Event';
import { Order, PartialOrder } from './data/Order';
import { Observable, map, firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // base url for the database
  baseUrl: string = 'https://books-fcda8-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  // EVENTS

  eventsBaseUrl: string = this.baseUrl + '/events';
  eventUrl(id: number): string {
    return this.eventsBaseUrl + `/${id}.json`;
  }
  
  /**
   * Stores the given event in the database. If there is already another event in the database with the same id, this event won't be stored
   * @param newEvent event to store in the database
   * @returns false if there is an event in the database with the same id, otherwise true
   */
  async addEvent(newEvent: Event): Promise<boolean> {
    const eventIds: number[] = await firstValueFrom(this.getEvents().pipe(map(events => events.map(event => event.id))));
    console.log(eventIds);
    
    if (eventIds.includes(newEvent.id)) {
      return false;
    }

    await firstValueFrom(this.http.post(this.eventUrl(newEvent.id), newEvent));
    return true;
  }

  /**
   * Returns all of the events stored in the database
   * @returns events stored in the database
   */
  getEvents(): Observable<Event[]> {
    return this.http.get<any>(this.eventsBaseUrl + '.json').pipe(
      map(data => {
        if (data) {
          let result: Event[] = [];
          for (let key in data) {
            let subs: any[] = []
            subs.push(data[key as keyof typeof data]);
            for (let sub of subs) {
              for (let key2 in sub) {
                const inter = sub[key2] as Event
                result.push({
                  id: inter.id,
                  title: inter.title,
                  description: inter.description,
                  address: inter.address,
                  isLiteracyClubAttending: inter.isLiteracyClubAttending,
                  startDate: new Date(inter.startDate),
                  endDate: new Date(inter.endDate)
                } as Event);
              }
            }
          }
          return result;
        } else {
          return [];
        }
      })
    );
  }

  /**
   * Removes the event with the given id from the database
   * @param id id of the event to remove from the database
   * @returns true if there is an event with the given id in the database, otherwise false
   */
  async deleteEvent(id: number): Promise<boolean> {
    const eventIds: number[] = await firstValueFrom(this.getEvents().pipe(map(events => events.map(event => event.id))));
    if (!eventIds.includes(id)) {
      return false;
    }
    
    await firstValueFrom(this.http.delete(this.eventUrl(id)));
    return true;
  }

  /**
   * Replaces the event with the same id in the database with the given event. If there is no event with the same id in the database, this event won't be stored
   * @param updatedEvent event to replace the event in the database with
   * @returns true if there is an event in the database with the same id as the given event, otherwise false
   */
  async updateEvent(updatedEvent: Event): Promise<boolean> {
    const successfulDelete: boolean = await this.deleteEvent(updatedEvent.id);
    if (successfulDelete) {
      return await this.addEvent(updatedEvent);
    }
    return false;
  }

  addEventId(partialEvent: PartialEvent): Observable<Event> {
    return this.getEvents().pipe(
      map(events => events.map(event => event.id)),
      map(ids => ids.reduce((prev, cur) => Math.max(prev, cur), 0)),
      map(i => ({
        id: i+1,
        title: partialEvent.title,
        description: partialEvent.description,
        address: partialEvent.address,
        isLiteracyClubAttending: partialEvent.isLiteracyClubAttending,
        startDate: partialEvent.startDate,
        endDate: partialEvent.endDate
      }))
    );
  }

  // ORDERS

  ordersBaseUrl: string = this.baseUrl + '/orders';
  orderUrl(id: number): string {
    return this.ordersBaseUrl + `/${id}.json`;
  }

  /**
   * Stores the given order in the database. If there is already another order in the database with the same id, this order won't be stored
   * @param newOrder order to store in the database
   * @returns false if there is an order in the database with the same id, otherwise true
   */
  async addOrder(newOrder: Order): Promise<boolean> {
    const orderIds: number[] = await firstValueFrom(this.getOrders().pipe(map(orders => orders.map(order => order.id))));
    
    if (orderIds.includes(newOrder.id)) {
      return false;
    }

    await firstValueFrom(this.http.post(this.orderUrl(newOrder.id), newOrder));
    return true;
  }

  /**
   * Returns all of the orders stored in the database
   * @returns orders stored in the database
   */
  getOrders(): Observable<Order[]> {
    return this.http.get<any>(this.ordersBaseUrl + '.json').pipe(
      map(data => {
        if (data) {
          let result: Order[] = [];
          for (let key in data) {
            let subs: any[] = []
            subs.push(data[key as keyof typeof data]);
            for (let sub of subs) {
              for (let key2 in sub) {
                const inter = sub[key2] as Order;
                result.push({
                  id: inter.id,
                  email : inter.email,
                  numBooks : inter.numBooks,
                  ageLower: inter.ageLower,
                  ageUpper: inter.ageUpper,
                  language: inter.language,
                  address: inter.address,
                  deliveryDate: new Date(inter.deliveryDate)
                } as Order);
              }
            }
          }
          return result;
        } else {
          return [];
        }
      })
    );
  }

  /**
   * Removes the order with the given id from the database
   * @param id id of the order to remove from the database
   * @returns true if there is an order with the given id in the database, otherwise false
   */
  async deleteOrder(id: number): Promise<boolean> {
    const orderIds: number[] = await firstValueFrom(this.getOrders().pipe(map(orders => orders.map(order => order.id))));
    if (!orderIds.includes(id)) {
      return false;
    }
    
    await firstValueFrom(this.http.delete(this.orderUrl(id)));
    return true;
  }

  /**
   * Replaces the order with the same id in the database with the given order. If there is no order with the same id in the database, this order won't be stored
   * @param updatedOrder order to replace the order in the database with
   * @returns true if there is an order in the database with the same id as the given order, otherwise false
   */
  async updateOrder(updatedOrder: Order): Promise<boolean> {
    const successfulDelete: boolean = await this.deleteOrder(updatedOrder.id);
    if (successfulDelete) {
      return await this.addOrder(updatedOrder);
    }
    return false;
  }

  addOrderId(partialOrder: PartialOrder): Observable<Order> {
    return this.getOrders().pipe(
      map(orders => orders.map(order => order.id)),
      map(ids => ids.reduce((prev, cur) => Math.max(prev, cur), 0)),
      map(i => ({
        id: i+1,
        numBooks : partialOrder.numBooks,
        ageLower: partialOrder.ageLower,
        ageUpper: partialOrder.ageUpper,
        language: partialOrder.language,
        address: partialOrder.address,
        email : partialOrder.email,
        deliveryDate: partialOrder.deliveryDate
      }))
    );
  }
  
  // LANGUAGES

  languagesUrl: string = this.baseUrl + '/languages.json';

  /**
   * Returns a list of all of the languages stored in the database
   * @returns list of the languages stored in the database
   */
  getLanguages(): Observable<string[]> {
    return this.http.get<string[]>(this.languagesUrl);
  }

}
