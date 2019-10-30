import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private cartService: CartService) { }

  storeOrder(order) {
    // this.cartService.clearCart();
    return this.db.list('/orders').push(order);
  }

  getOrders() { 
    return this.db.list('/orders');
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId        
      }
    });
  }
}
