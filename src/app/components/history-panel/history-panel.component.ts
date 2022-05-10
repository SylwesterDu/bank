import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-panel',
  templateUrl: './history-panel.component.html',
  styleUrls: ['./history-panel.component.scss']
})
export class HistoryPanelComponent implements OnInit {
  transactions: Array<any> = [
    {
      from: "Jan kowalski",
      value: 200.00
    },
    {
      from: "Piotr Nowak",
      value: -120.00
    },
    {
      from: "Opłata za kartę",
      value: -2.00
    },
    {
      from: "Wypłata",
      value: 3342.00
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
