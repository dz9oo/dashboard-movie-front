import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})
export class CardListComponent implements OnInit {
  @Input()
  title: string;

  films = [
    "Dofus-Livre 1 : Julith",
    "Bienvenue chez les Chtis",
    "la grande vadrouille"
  ];
  items = [
    {
      film: "Dofus-Livre 1 : Julith",
      annee: "2015"
    },
    {
      film: "Bienvenue chez les Chtis",
      annee: "2013"
    },
    {
      film: "la grande vadrouille",
      annee: "2000"
    }
  ];
  annees = ["2015", "1900", "1990"];

  constructor() {}

  ngOnInit(): void {}
}
