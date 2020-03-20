import { Component, OnInit, Input } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";
import { ActorModel } from "src/app/models/actor.model";

@Component({
  selector: "app-card-diagram",
  templateUrl: "./card-diagram.component.html",
  styleUrls: ["./card-diagram.component.scss"]
})
export class CardDiagramComponent implements OnInit {
  @Input() title: string;
  @Input() actorFemaleList: ActorModel[];
  @Input() actorMaleList: ActorModel[];

  public doughnutChartLabels: Label[] = ["Femme", "Homme"];
  public doughnutChartData: MultiDataSet = [[350, 450]];
  public doughnutChartType: ChartType = "doughnut";
  constructor() {}

  ngOnInit(): void {
    this.doughnutChartData = [
      [this.actorFemaleList.length, this.actorMaleList.length]
    ];
  }

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
