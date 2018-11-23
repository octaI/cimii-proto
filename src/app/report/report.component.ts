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
      text: 'Nivel Mensual de Temperatura de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 45,
        }
      }]
    },
    elements: { point: {radius: 5}
    }
  };

  public barChartOptions2 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Temperatura de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 50,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public doughnutChartLabels = ['pH', 'Potasio', 'Azufre', 'Magnesio'];
  public doughnutChartData = [100, 50, 10, 10];
  public doughnutChartType = 'doughnut';

  public doughnutChartLabels2 = ['Calcio', 'Fosforo', 'Nitrogeno'];
  public doughnutChartData2 = [50, 30, 30];

  public lineChartColors = [
    {
      backgroundColor: 'red',
      borderColor: 'black',
      pointBackgroundColor: '#ff4e62',
      pointBorderColor: 'black',
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      backgroundColor: 'white',
      borderColor: 'white',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#c3c6c6',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public barChartLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  public barChartType = 'line';
  public barChartLegend = true;

  public barChartData = [
    {data: [30, 29, 28, 31, 32, 33, 27, 24, 27, 29, 32, 30, 29, 28, 31, 32, 33, 27, 25, 27, 29, 32, 30, 29, 28, 31, 32, 33, 27],
      label: 'Valores diarios', fill: false, showLine: false},
    {data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
      label: 'Valor Ideal', fill: false}];

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

  public tomatoBarChartIdealValue = [];
  public tomatoBarChartActualValue = [];
  populateArrayWithValue(array: Array<any>, ideal_value: number){
    for(let i = 0; i < 30; i++){
      array[i] = ideal_value;
    }
  }

  populateArrayWithRandomValues(array: Array<any>, max_value: number, min_value: number){
    for(let i = 0; i < 30; i++){
      array[i] = Math.floor(Math.random() * (max_value - min_value + 1) + min_value);
    }
  }

  public barChartLabels2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  public barChartData2 = [
    {data: this.tomatoBarChartActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartIdealValue,
      label: 'Valor Ideal', fill: false}];

  public lettuceBarChartpHActualValue = [];
  public lettuceBarChartpHIdealValue = [];
  public barChartData3 = [
    {data: this.lettuceBarChartpHActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.lettuceBarChartpHIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartOptions3 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de pH de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 120,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public doughnutChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Niveles de reserva de Nutrientes'
    }
  };

  public radarChartType = 'radar';
  constructor() { }

  public tomatoBarChartpHActualValue = [];
  public tomatoBarChartpHIdealValue = [];
  public barChartData4 = [
    {data: this.tomatoBarChartpHActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartpHIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartOptions4 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de pH de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 120,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public tomatoBarChartAzufreActualValue = [];
  public tomatoBarChartAzufreIdealValue = [];
  public lettuceBarChartAzufreActualValue = [];
  public lettuceBarChartAzufreIdealValue = [];

  public barChartData6 = [
    {data: this.tomatoBarChartAzufreActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartAzufreIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartData5 = [
    {data: this.lettuceBarChartAzufreActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.lettuceBarChartAzufreIdealValue,
      label: 'Valor Ideal', fill: false}];
  public barChartOptions5 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Azufre de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 5,
          stepValue : 5,
          max : 20,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public barChartOptions6 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Azufre de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 40,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public tomatoBarChartMagnesioActualValue = [];
  public tomatoBarChartMagnesioIdealValue = [];
  public lettuceBarChartMagnesioActualValue = [];
  public lettuceBarChartMagnesioIdealValue = [];

  public barChartData7 = [
    {data: this.lettuceBarChartMagnesioActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.lettuceBarChartMagnesioIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartData8 = [
    {data: this.tomatoBarChartMagnesioActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartMagnesioIdealValue,
      label: 'Valor Ideal', fill: false}];
  public barChartOptions7 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Magnesio de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 5,
          stepValue : 5,
          max : 20,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public barChartOptions8 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Magnesio de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 25,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public tomatoBarChartCalcioActualValue = [];
  public tomatoBarChartCalcioIdealValue = [];
  public lettuceBarChartCalcioActualValue = [];
  public lettuceBarChartCalcioIdealValue = [];

  public barChartData9 = [
    {data: this.lettuceBarChartCalcioActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.lettuceBarChartCalcioIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartData10 = [
    {data: this.tomatoBarChartCalcioActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartCalcioIdealValue,
      label: 'Valor Ideal', fill: false}];
  public barChartOptions9 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Calcio de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 5,
          stepValue : 5,
          max : 55,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public barChartOptions10 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Calcio de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 45,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public tomatoBarChartFosforoActualValue = [];
  public tomatoBarChartFosforoIdealValue = [];
  public lettuceBarChartFosforoActualValue = [];
  public lettuceBarChartFosforoIdealValue = [];

  public barChartData11 = [
    {data: this.lettuceBarChartFosforoActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.lettuceBarChartFosforoIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartData12 = [
    {data: this.tomatoBarChartFosforoActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartFosforoIdealValue,
      label: 'Valor Ideal', fill: false}];
  public barChartOptions11 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Fosforo de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 5,
          stepValue : 5,
          max : 45,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public barChartOptions12 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Fosforo de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 45,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public tomatoBarChartNitrogenoActualValue = [];
  public tomatoBarChartNitrogenoIdealValue = [];
  public lettuceBarChartNitrogenoActualValue = [];
  public lettuceBarChartNitrogenoIdealValue = [];

  public barChartData13 = [
    {data: this.lettuceBarChartNitrogenoActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.lettuceBarChartNitrogenoIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartData14 = [
    {data: this.tomatoBarChartNitrogenoActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartNitrogenoIdealValue,
      label: 'Valor Ideal', fill: false}];
  public barChartOptions13 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Nitrogeno de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 5,
          stepValue : 5,
          max : 35,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public barChartOptions14 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Nitrogeno de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 65,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public tomatoBarChartPotasioActualValue = [];
  public tomatoBarChartPotasioIdealValue = [];
  public lettuceBarChartPotasioActualValue = [];
  public lettuceBarChartPotasioIdealValue = [];

  public barChartData15 = [
    {data: this.lettuceBarChartPotasioActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.lettuceBarChartPotasioIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartData16 = [
    {data: this.tomatoBarChartPotasioActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartPotasioIdealValue,
      label: 'Valor Ideal', fill: false}];
  public barChartOptions15 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Potasio de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 5,
          stepValue : 5,
          max : 70,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public barChartOptions16 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Potasio de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 5,
          max : 65,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public tomatoBarChartLuzActualValue = [];
  public tomatoBarChartLuzIdealValue = [];
  public lettuceBarChartLuzActualValue = [];
  public lettuceBarChartLuzIdealValue = [];

  public barChartData17 = [
    {data: this.lettuceBarChartLuzActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.lettuceBarChartLuzIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartData18 = [
    {data: this.tomatoBarChartLuzActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartLuzIdealValue,
      label: 'Valor Ideal', fill: false}];
  public barChartOptions17 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Luz de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 10,
          max : 1200,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public barChartOptions18 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Luz de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 10,
          max : 1250,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public tomatoBarChartOxigenoActualValue = [];
  public tomatoBarChartOxigenoIdealValue = [];
  public lettuceBarChartOxigenoActualValue = [];
  public lettuceBarChartOxigenoIdealValue = [];

  public barChartData19 = [
    {data: this.lettuceBarChartOxigenoActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.lettuceBarChartOxigenoIdealValue,
      label: 'Valor Ideal', fill: false}];

  public barChartData20 = [
    {data: this.tomatoBarChartOxigenoActualValue,
      label: 'Valores diarios', fill: false, showLine: false},
    {data: this.tomatoBarChartOxigenoIdealValue,
      label: 'Valor Ideal', fill: false}];
  public barChartOptions19 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Oxigeno de Lechuga'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 10,
          max : 65,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  public barChartOptions20 = {
    responsive: true,
    title: {
      display: true,
      text: 'Nivel Mensual de Oxigeno de Tomate'
    },
    scales : {
      yAxes: [{
        ticks: {
          steps : 10,
          stepValue : 10,
          max : 75,
        }
      }]
    },
    elements: { point: {radius: 5}}
  };

  ngOnInit() {
    this.populateArrayWithValue(this.tomatoBarChartIdealValue, 35);
    this.populateArrayWithRandomValues(this.tomatoBarChartActualValue,45,25);
    this.populateArrayWithRandomValues(this.lettuceBarChartpHActualValue,105,94);

    this.populateArrayWithValue(this.lettuceBarChartpHIdealValue,100);
    this.populateArrayWithValue(this.tomatoBarChartpHIdealValue,90);
    this.populateArrayWithRandomValues(this.tomatoBarChartpHActualValue,97,84);

    this.populateArrayWithValue(this.lettuceBarChartAzufreIdealValue,10);
    this.populateArrayWithRandomValues(this.lettuceBarChartAzufreActualValue,15,5);
    this.populateArrayWithValue(this.tomatoBarChartAzufreIdealValue,20);
    this.populateArrayWithRandomValues(this.tomatoBarChartAzufreActualValue,30,10);

    this.populateArrayWithValue(this.lettuceBarChartMagnesioIdealValue,10);
    this.populateArrayWithRandomValues(this.lettuceBarChartMagnesioActualValue,15,5);
    this.populateArrayWithValue(this.tomatoBarChartMagnesioIdealValue,17);
    this.populateArrayWithRandomValues(this.tomatoBarChartMagnesioActualValue,25,10);

    this.populateArrayWithValue(this.lettuceBarChartCalcioIdealValue,30);
    this.populateArrayWithRandomValues(this.lettuceBarChartCalcioActualValue,55,10);
    this.populateArrayWithValue(this.tomatoBarChartCalcioIdealValue,28);
    this.populateArrayWithRandomValues(this.tomatoBarChartCalcioActualValue,45,10);

    this.populateArrayWithValue(this.lettuceBarChartFosforoIdealValue,27);
    this.populateArrayWithRandomValues(this.lettuceBarChartFosforoActualValue,35,20);
    this.populateArrayWithValue(this.tomatoBarChartFosforoIdealValue,25);
    this.populateArrayWithRandomValues(this.tomatoBarChartFosforoActualValue,35,15);

    this.populateArrayWithValue(this.lettuceBarChartNitrogenoIdealValue,20);
    this.populateArrayWithRandomValues(this.lettuceBarChartNitrogenoActualValue,25,15);
    this.populateArrayWithValue(this.tomatoBarChartNitrogenoIdealValue,32);
    this.populateArrayWithRandomValues(this.tomatoBarChartNitrogenoActualValue,55,9);

    this.populateArrayWithValue(this.lettuceBarChartPotasioIdealValue,50);
    this.populateArrayWithRandomValues(this.lettuceBarChartPotasioActualValue,60,40);
    this.populateArrayWithValue(this.tomatoBarChartPotasioIdealValue,35);
    this.populateArrayWithRandomValues(this.tomatoBarChartPotasioActualValue,50,20);

    this.populateArrayWithValue(this.lettuceBarChartLuzIdealValue,1000);
    this.populateArrayWithRandomValues(this.lettuceBarChartLuzActualValue,1100,900);
    this.populateArrayWithValue(this.tomatoBarChartLuzIdealValue,1050);
    this.populateArrayWithRandomValues(this.tomatoBarChartLuzActualValue,1150,950);

    this.populateArrayWithValue(this.lettuceBarChartOxigenoIdealValue,48);
    this.populateArrayWithRandomValues(this.lettuceBarChartOxigenoActualValue,55,40);
    this.populateArrayWithValue(this.tomatoBarChartOxigenoIdealValue,60);
    this.populateArrayWithRandomValues(this.tomatoBarChartOxigenoActualValue,65,55);
  }

}
