import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Product } from '../models/app-products.interface';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

import 'rxjs/add/operator/switchMap'
import { CartService } from '../services/shopping-cart.service';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;
  cart: any;
  subscription: Subscription
 
  constructor(
    route: ActivatedRoute,
    productService: ProductService, 
    categoryService: CategoryService,
    private cartService: CartService
    ) { 

    productService
      .getAll()
      .switchMap(product => {
        this.products = product

        return route.queryParamMap;
      })

      .subscribe(params => {
        this.category = params.get('category');
        
        this.filteredProducts = (this.category) ?
          this.products.filter( p => p.category === this.category) : 
          this.products;
      })

      
      this.categories$ = categoryService.getCategories();
    
  }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart())
      .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
}
  