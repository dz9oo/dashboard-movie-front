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

  constructor() {}

  public barChartOptions = {
    scales: { xAxes: [{ display: false }], yAxes: [{ display: false }] },
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
  public barChartLegend = false;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" }
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
