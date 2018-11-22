import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public barChartOptions1 = {
    responsive: true,
    title: {
      display: true,
      text: 'Niveles de nutrientes del suelo'
    }
  };

  public barChartOptions2 = {
    responsive: true,
    title: {
      display: true,
      text: 'Niveles de Ambiente'
    }
  };

  public doughnutChartLabels = ['pH', 'Potasio', 'Azufre', 'Magnesio'];
  public doughnutChartData = [100, 50, 10, 10];
  public doughnutChartType = 'doughnut';

  public doughnutChartLabels2 = ['Calcio', 'Fosforo', 'Nitrogeno'];
  public doughnutChartData2 = [50,30,30];

  public barChartLabels = ['pH', 'Potasio', 'Azufre', 'Magnesio', 'Calcio', 'Fosforo', 'Nitrogeno'];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Tomate'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Lechuga'}
  ];

  public radarChartLabels = ['Herbicida', 'Fungicida', 'Insecticida', 'Acaricida'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: 'Tomate'},
    {data: [90, 150, 200, 45], label: 'Lechuga'}
  ];
  public radarChartOptions = {
    responsive: true,
    scale: {
      gridLines: {color: '#ffffff'}
    },
    title: {
      display: true,
      text: 'Niveles de Herbicidas'
    }
  };

  public barChartLabels2 = ['Luz (x10 L) ', 'Temperatura (C)', 'Humedad (hPa)'];
  public barChartData2 = [
    {data: [105, 26, 95], label: 'Tomate'},
    {data: [90, 25, 96], label: 'Lechuga'}
  ];

  public doughnutChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Niveles de reserva de Nutrientes'
    }
  };

  public radarChartType = 'radar';
  constructor() { }

  ngOnInit() {
      }

}
