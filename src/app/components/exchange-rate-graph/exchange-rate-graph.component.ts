import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-exchange-rate-graph',
  templateUrl: './exchange-rate-graph.component.html',
  styleUrls: ['./exchange-rate-graph.component.scss']
})
export class ExchangeRateGraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const labels = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień"];
    const myChart = new Chart("chart", {

      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Dolar amerykański',
          data: [4.11, 4.01, 4.33, 4.21, 4.46, 4.11, 4.13, 4.18],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        aspectRatio: parent.innerWidth / parent.innerHeight * 1.2,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: false,
          }
        }
      }
    });
  }

}
