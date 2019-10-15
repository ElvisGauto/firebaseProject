import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  products$;

  constructor(private productServices: ProductService) { 
    this.products$ = this.productServices.getAll();
  }

  ngOnInit() {
  }



}
