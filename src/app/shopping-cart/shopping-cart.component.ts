import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../shared/services/shopping-cart.service';
import { ShoppingCart } from './shopping-cartM/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart$;

  constructor(private cartService: CartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
