import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-products-panel',
  templateUrl: './user-products-panel.component.html',
  styleUrls: ['./user-products-panel.component.scss']
})
export class UserProductsPanelComponent implements OnInit {
  currencies: Array<string> = ['PLN', 'EUR'];
  constructor() { }

  ngOnInit(): void {
  }

}
