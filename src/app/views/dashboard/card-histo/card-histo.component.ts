import { Component, OnInit, Input } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";

@Component({
  selector: "app-card-histo",
  templateUrl: "./card-histo.component.html",
  styleUrls: ["./card-histo.component.scss"]
})
export class CardHistoComponent implements OnInit {
  @Input() title: string;

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: { xAxes: [{}], yAxes: [{}] },
  //   plugins: {
  //     datalabels: {
  //       anchor: "end",
  //       align: "end"
  //     }
  //   }
  // };
  // public barChartLabels: Label[] = [
  //   "2006",
  //   "2007",
  //   "2008",
  //   "2009",
  //   "2010",
  //   "2011",
  //   "2012"
  // ];
  // public barChartType: ChartType = "bar";
  // public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  // ];
  constructor() {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];

  ngOnInit(): void {}

  // // events
  // public chartClicked({
  //   event,
  //   active
  // }: {
  //   event: MouseEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({
  //   event,
  //   active
  // }: {
  //   event: MouseEvent;
  //   active: {}[];
  // }): void {
  //   console.log(event, active);
  // }

  // public randomize(): void {
  //   // Only Change 3 values
  //   const data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     Math.random() * 100,
  //     56,
  //     Math.random() * 100,
  //     40
  //   ];
  //   this.barChartData[0].data = data;
  // }
}
