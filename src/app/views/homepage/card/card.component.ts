import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { MovieModel } from "src/app/models/movie.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() items: MovieModel[];
  @Input() title: string;
  @Input() description: string;
  @Input() year: number;
  @Input() picture: string;
  @Input() score: number;
  genreId: number;
  movieModel: MovieModel;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}
}
