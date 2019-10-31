import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../../models/app-products.interface';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../../shopping-cart/shopping-cartM/shopping-cart';

 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;
  cart$: Observable<ShoppingCart>;
 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService, 
    private cartService: CartService
    ) { 
    
  }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();  
    this.populateProducts();
  }

  private populateProducts() {
    this.productService
    .getAll()
    .switchMap(product => {
      this.products = product
      return this.route.queryParamMap;
    })

    .subscribe(params => {
      this.category = params.get('category');
      this.applyFilter();
    });
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
    this.products.filter( p => p.category === this.category) : 
    this.products;
  }
}
  