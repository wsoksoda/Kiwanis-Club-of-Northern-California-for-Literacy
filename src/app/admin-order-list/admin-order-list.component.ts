import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Order } from '../data/Order';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.css']
})
export class AdminOrderListComponent {
  constructor(private databaseService: DatabaseService) {}
  ngOnInit() {
    this.databaseService.getOrders().subscribe(
      (orders) => this.orders = orders
  );
}
  orders: Order[] = []

async delete(id: number){
  console.log(id);
  await this.databaseService.deleteOrder(id);
  this.databaseService.getOrders().subscribe(
    (orders) => this.orders = orders
  );
}

}
