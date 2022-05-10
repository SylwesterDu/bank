import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-exchange-panel',
  templateUrl: './currency-exchange-panel.component.html',
  styleUrls: ['./currency-exchange-panel.component.scss']
})
export class CurrencyExchangePanelComponent implements OnInit {
  showMenu: boolean = false;
  toExchange: number = 1000.0;
  provision: number = 3.22;
  constructor() { }

  ngOnInit(): void {
  }

}
