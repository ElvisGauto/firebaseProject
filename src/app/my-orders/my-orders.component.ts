
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { AuthService } from '../shared/services/auth.service';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {
  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

    this.orders$ = this.authService.user$.switchMap(u => this.orderService.getOrdersByUser(u.uid));
  }
}
