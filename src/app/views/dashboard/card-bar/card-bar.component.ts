import { Component, OnInit, Input } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import * as pluginDataLabels from "chartjs-plugin-datalabels";
import { Label } from "ng2-charts";

@Component({
  selector: "app-card-bar",
  templateUrl: "./card-bar.component.html",
  styleUrls: ["./card-bar.component.scss"]
})
export class CardBarComponent implements OnInit {
  @Input() title: string;
  @Input() barChartLabels = [];
  @Input() barChartData = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{ ticks: { min: 0 }, display: false }],
      yAxes: [{ ticks: { fontColor: "#FFF" }, display: true }]
    },
    layout: { padding: 0 },
    plugins: {
      datalabels: {
        anchor: "center",
        align: "center"
      }
    }
  };

  public barChartType: ChartType = "horizontalBar";
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  constructor() {}

  ngOnInit(): void {}
}
