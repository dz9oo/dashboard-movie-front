import { Component, OnInit, Input } from "@angular/core";
import { ActorModel } from "src/app/models/actor.model";
import { ActorService } from "src/app/services/actor.service";

@Component({
  selector: "app-card-actor",
  templateUrl: "./card-actor.component.html",
  styleUrls: ["./card-actor.component.scss"]
})
export class CardActorComponent implements OnInit {
  @Input() title: string;
  @Input() items: ActorModel[];

  count: number = 10;

  // items = [
  //   {
  //     firstname: "John",
  //     lastname: "Doe",
  //     count: 23
  //   },
  //   {
  //     firstname: "John",
  //     lastname: "Doe",
  //     count: 23
  //   },
  //   {
  //     firstname: "John",
  //     lastname: "Doe",
  //     count: 23
  //   },
  //   {
  //     firstname: "John",
  //     lastname: "Doe",
  //     count: 23
  //   },
  //   {
  //     firstname: "John",
  //     lastname: "Doe",
  //     count: 23
  //   },
  //   {
  //     firstname: "John",
  //     lastname: "Doe",
  //     count: 23
  //   }
  // ];
  constructor(private actorService: ActorService) {}

  ngOnInit(): void {}
}
