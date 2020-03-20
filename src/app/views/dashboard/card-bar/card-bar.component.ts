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

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{ display: false }], yAxes: [{ display: false }] },
    layout: { padding: 0 },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabels: Label[] = [
    "Action",
    "Drame",
    "Comedie",
    "romantique",
    "sci-fy"
  ];
  public barChartType: ChartType = "horizontalBar";
  public barChartLegend = false;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56], backgroundColor: "#FFF" }
  ];
  constructor() {}

  ngOnInit(): void {}

  // events
  public chartClicked({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
