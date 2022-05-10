import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-screen',
  templateUrl: './history-screen.component.html',
  styleUrls: ['./history-screen.component.scss']
})
export class HistoryScreenComponent implements OnInit {
  transactions: Array<any> = [
    {
      date: '01.01.2022',
      title: "czynsz",
      value: -1000
    },
    {
      date: '01.02.2022',
      title: "wypłata",
      value: 5000
    },
    {
      date: '23.01.2022',
      title: "rachunek za internet",
      value: -59.99
    },
    {
      date: '01.05.2022',
      title: "Wynagrodzenia",
      value: 3000.22
    },
    {
      date: '21.11.2022',
      title: "Rachunek za internet",
      value: -59.99
    },
    {
      date: '01.01.2022',
      title: "czynsz",
      value: -1000
    },
    {
      date: '01.01.2022',
      title: "czynsz",
      value: -1000
    },
    {
      date: '01.01.2022',
      title: "czynsz",
      value: -1000
    },
    {
      date: '01.01.2022',
      title: "czynsz",
      value: -1000
    },
    {
      date: '01.01.2022',
      title: "czynsz",
      value: -1000
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
