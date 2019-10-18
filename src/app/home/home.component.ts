import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { AppUser } from '../models/app-user.interface';
import { Product } from '../models/app-products.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$;

  constructor(private productServices: ProductService) { }

  ngOnInit() {
   this.products$ = this.productServices.getAll();
  }

  
}
