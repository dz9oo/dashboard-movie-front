import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { MovieModel } from "src/app/models/movie.model";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  movies: MovieModel[];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .subscribe((data: MovieModel[]) => (this.movies = data));
  }
}
