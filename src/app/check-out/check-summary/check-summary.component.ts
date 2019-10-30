import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'check-summary',
  templateUrl: './check-summary.component.html',
  styleUrls: ['./check-summary.component.scss']
})
export class CheckSummaryComponent implements OnInit {

  @Input('cart') cart;

  constructor() { }

  ngOnInit() {
  }

}
