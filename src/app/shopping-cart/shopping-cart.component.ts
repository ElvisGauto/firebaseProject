import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
  showQuantity = true;

  @ViewChild('quantity', {static: false}) quantity:ElementRef;

  constructor(private cartService: CartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  editQuantity(i) {
    // this.showQuantity = false;
    console.log(i);
  }

  saveQuantity() {
    this.showQuantity = true;
    const valueInput = this.quantity.nativeElement.value;
    console.log(valueInput);
  }
}
