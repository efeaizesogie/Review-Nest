import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexLegend } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend
};


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  

  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 30, 25];
  chartLegend: ApexLegend = {
      show:false
  }

  chartDetails: any = {
    type: 'donut',
    width: 152.663, // Set the width
    height: 152.663, // Set the height
    legend: {
      show: false // Hide the legend
    }
  };

  chartDataLabels: ApexDataLabels = {
    enabled: false
  };

  constructor() {}

  ngOnInit(): void {
    // Retrieve the percentage values from localStorage
    const percentage1 = localStorage.getItem('Percentage1');
    const percentage2 = localStorage.getItem('Percentage2');
    const percentage3 = localStorage.getItem('Percentage3');
    const percentage4 = localStorage.getItem('Percentage4');
    const percentage5 = localStorage.getItem('Percentage5');

    // Update the chartSeries with the retrieved percentage values
    this.chartSeries = [
      parseFloat(percentage5 || '0'),
      parseFloat(percentage4 || '0'),
      parseFloat(percentage3 || '0'),
      parseFloat(percentage2 || '0'),
      parseFloat(percentage1 || '0')
    ];
  }

}
