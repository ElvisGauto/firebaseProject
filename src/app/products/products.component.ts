import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Product } from '../models/app-products.interface';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

import 'rxjs/add/operator/switchMap'
 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;
 
  constructor(
    route: ActivatedRoute,
    productService: ProductService, 
    categoryService: CategoryService
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
 
}
 