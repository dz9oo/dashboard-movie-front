import { Component, OnInit, Input } from "@angular/core";
import { Chart } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";

@Component({
  selector: "app-card-histo",
  templateUrl: "./card-histo.component.html",
  styleUrls: ["./card-histo.component.scss"]
})
export class CardHistoComponent implements OnInit {
  @Input() title: string;
  @Input() listYearCount: any;
  @Input() listYear: number[];
  @Input() countYear: number[];
  @Input() barChartData = [];
  @Input() barChartLabels = [];

  public barChartOptions = {
    scales: {
      xAxes: [{ ticks: { fontColor: "#FFF" } }],
      yAxes: [{ ticks: { min: 0 }, display: false }]
    }, //{ display: false }
    scaleShowVerticalLines: false,
    minBarLength: 0,
    barThickness: 1,
    ticks: {
      min: 0
    },
    responsive: true
  };
  public barChartType = "bar";
  public barChartLegend = false;

  constructor() {}

  ngOnInit(): void {}
}
