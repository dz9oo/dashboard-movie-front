import { Component, OnInit, Input } from "@angular/core";
import { MovieModel } from "src/app/models/movie.model";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})
export class CardListComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  year: number;

  @Input() items: MovieModel[];

  // items = [
  //   {
  //     title: "Dofus-Livre 1 : Julith",
  //     year: "2015"
  //   },
  //   {
  //     title: "Bienvenue chez les Chtis",
  //     year: "2013"
  //   },
  //   {
  //     title: "la grande vadrouille",
  //     year: "2000"
  //   }
  // ];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .subscribe((data: MovieModel[]) => (this.items = data));
  }
}
