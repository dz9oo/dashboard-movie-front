import { Component, OnInit, Input } from "@angular/core";
import { MovieModel } from "src/app/models/movie.model";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})
export class CardListComponent implements OnInit {
  @Input()
  title: string;
  @Input() items: MovieModel[];

  // items = [
  //   {
  //     title: "Dofus-Livre 1 : Julith",
  //     annee: "2015"
  //   },
  //   {
  //     title: "Bienvenue chez les Chtis",
  //     annee: "2013"
  //   },
  //   {
  //     title: "la grande vadrouille",
  //     annee: "2000"
  //   }
  // ];

  constructor() {}

  ngOnInit(): void {}
}
