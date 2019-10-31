import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from '../models/app-products.interface';

import { take } from 'rxjs/operators';
import { ShoppingCart } from '../../shopping/components/shopping-cart/shopping-cartM/shopping-cart';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private db: AngularFireDatabase) { }

  // create() {
  //   return this.db.list('/shopping-carts/').push({
  //     dateCreated: new Date().getTime()
  //   });
  // }

   // private async getOrCreateCartId() {
    // let cartId = localStorage.getItem('cartId');
    // if(!cartId) return cartId;

    // let result = await this.create();
    // localStorage.setItem('cartId', result.$key);
    // return result.key;
  // }

  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = localStorage.getItem('cartId');
    return this.db.object('/shopping-carts/' + cartId)
      .map((x:any) => new ShoppingCart(x.items));
  }

  updateCart(product: Product, change: number) {
    let cartId = localStorage.getItem('cartId');
    let item$ = this.db.object('/shopping-carts/'+cartId+'/items/'+product.$key);
    item$.pipe(take(1)).subscribe( item => {
      item$.update({ 
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price, 
        quantity: (item.quantity || 0) + change });
    });
  }

  clearCart() {
    let cartId = localStorage.getItem('cartId');
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }
}
 
