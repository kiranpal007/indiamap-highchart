import { Component } from "@angular/core";

import { MapChart } from 'angular-highcharts';
import { topology } from '../mapdata/mapdata'

const data = [
  ['in-5390', 10],
  ['in-py', 11],
  ['in-ld', 12],
  ['in-an', 13],
  ['in-wb', 6666],
  ['in-or', 15],
  ['in-br', 16],
  ['in-sk', 17],
  ['in-ct', 18],
  ['in-tn', 19],
  ['in-mp', 20],
  ['in-2984', 21],
  ['in-ga', 22],
  ['in-nl', 23],
  ['in-mn', 24],
  ['in-ar', 25],
  ['in-mz', 26],
  ['in-tr', 27],
  ['in-3464', 28],
  ['in-dl', 29],
  ['in-hr', 30],
  ['in-ch', 31],
  ['in-hp', 32],
  ['in-jk', 33],
  ['in-kl', 34],
  ['in-ka', 35],
  ['in-dn', 36],
  ['in-mh', 37],
  ['in-as', 38],
  ['in-ap', 39],
  ['in-ml', 40],
  ['in-pb', 41],
  ['in-rj', 42],
  ['in-up', 43],
  ['in-ut', 44],
  ['in-jh', 45]
];
@Component({
  selector:'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  chart = new MapChart({
    chart: {
      map:topology
    },
    title: {
      text: 'Migrant workmen'
    },
    subtitle: {
      text: ''
    },
    mapNavigation: {
      enabled: true,
      enableButtons: false
    },
    mapView:{
      zoom:4,
      maxZoom:10
    },
    legend:{
      enabled:false
    },
    credits:{
      enabled:false
    },
    colorAxis: {
      min: 0
    },
    series: [{
      data: data,
      name: 'Total Migrant workman',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }]
  } as any);
}