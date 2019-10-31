import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { AppUser } from '../shared/models/app-user.interface';
import { Product } from '../shared/models/app-products.interface';

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
