import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartItem } from '../../shopping-cart/shopping-cartM/shopping-cart-item';
import { CartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../shopping-cart/shopping-cartM/shopping-cart';
import { Subscription } from 'rxjs';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';
import { Order } from '../../models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit { 
  @Input('cart') cart: ShoppingCart;
  shipping = {}; 
  userId: string;
  userSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router,
    private cartService: CartService) {}

  async ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.storeOrder(order);
    this.cartService.clearCart();
    this.router.navigate(['/order-success', result.key]);
  }    

}
