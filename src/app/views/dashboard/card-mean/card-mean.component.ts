import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-mean",
  templateUrl: "./card-mean.component.html",
  styleUrls: ["./card-mean.component.scss"]
})
export class CardMeanComponent implements OnInit {
  @Input() title: string;
  @Input() meanDuration: number;
  constructor() {}

  ngOnInit(): void {}
}
