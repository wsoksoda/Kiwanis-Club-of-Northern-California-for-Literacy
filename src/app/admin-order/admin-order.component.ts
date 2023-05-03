import { Component, Input } from '@angular/core';
import { DEFAULT_ORDER, Order } from '../data/Order';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent {
  @Input() order?: Order;
}
