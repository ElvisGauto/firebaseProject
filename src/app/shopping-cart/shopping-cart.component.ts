import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/shopping-cart.service';
import { ShoppingCart } from './shopping-cartM/shopping-cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart$;
  sum = 0;

  constructor(private cartService: CartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
