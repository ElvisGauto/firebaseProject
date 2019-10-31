import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shopping-summary',
  templateUrl: './shopping-summary.component.html',
  styleUrls: ['./shopping-summary.component.scss']
})
export class ShoppingSummaryComponent implements OnInit {

  @Input('cart') cart;

  constructor() { }

  ngOnInit() {
  }

}
