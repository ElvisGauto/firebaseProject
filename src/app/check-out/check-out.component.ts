import { Component, OnInit } from '@angular/core';
import { ShoppingCartItem } from '../shopping-cart/shopping-cartM/shopping-cart-item';
import { CartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../shopping-cart/shopping-cartM/shopping-cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit { 
  // shipping = {}; 
  // cart: ShoppingCart;
  // subscription: Subscription;

  // constructor(private cartService: CartService) {}

  async ngOnInit() {
    // let cart$ = await this.cartService.getCart();
    // this.subscription = cart$.subscribe(cart => this.cart = cart);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // placeOrder() {
  //   let order = {
  //     datePlaced: new Date().getDate(),
  //     shipping: this.shipping,
  //     items: this.cart.items.map(i => {
  //       return {
  //         product: {
  //           title: i.title,
  //           imageUrl: i.imageUrl,
  //           price: i.price
  //         },
  //         quantity: i.quantity,
  //         totalPrice: i.totalPrice
  //       }
  //     })
  //   }
  // }    

}
