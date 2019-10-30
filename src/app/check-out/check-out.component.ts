import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/shopping-cart.service';
import { ShoppingCart } from '../shopping-cart/shopping-cartM/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  cart$: Observable<ShoppingCart>;

  constructor(
    private cartService: CartService) {}

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

}
