import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/app-products.interface';
import { DataTableResource } from 'angular7-data-table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;
  tableResourse: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  id;
  product = {};

  constructor(
    private productServices: ProductService, 
    private router: Router) { 

    this.subscription = this.productServices.getAll()
      .subscribe(products => {
        this.products = products;
        this.initializeTable(products);
      });
  }

  private initializeTable(products: Product[]) {
    this.tableResourse = new DataTableResource(products);
    this.tableResourse.query({ offset: 0 })
      .then(items => this.items = items);
    this.tableResourse.count()  
      .then(count => this.itemCount = count);
  } 

  reloadItems(params) {
    if (!this.tableResourse) return;

    this.tableResourse.query(params)
    .then(items => this.items = items);
  }

  filter(query: string) {
    let filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products; 
     
    this.initializeTable(filteredProducts);  
  }

  delete(item) {
    if (!confirm('Are you sure want to delete this product?')) return;

    this.productServices.delete(item); 
    this.router.navigate(['/admin/products']); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }



}
