import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { MovieModel } from "src/app/models/movie.model";
import { ActorService } from "src/app/services/actor.service";
import { ActorModel } from "src/app/models/actor.model";
import { NumberValueAccessor } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public movies: MovieModel[];
  meanDurationMovies: number = 0;
  actorFemale: ActorModel[];
  actorMale: ActorModel[];
  actorFemaleMostView: ActorModel[];
  actorMaleMostView: ActorModel[];
  constructor(
    private movieService: MovieService,
    private actorService: ActorService
  ) {
    this.movieService
      .getMovies()
      .subscribe(
        (data: MovieModel[]) => (
          (this.movies = data),
          (this.meanDurationMovies = this.getMeanDurationMovie(data))
        )
      );

    this.actorService
      .getActorsFemale()
      .subscribe((data: ActorModel[]) => (this.actorFemale = data));

    this.actorService
      .getActorsMale()
      .subscribe((data: ActorModel[]) => (this.actorMale = data));

    this.actorService
      .getActorsFemaleMostView()
      .subscribe((data: ActorModel[]) => (this.actorFemaleMostView = data));

    this.actorService
      .getActorsMaleMostView()
      .subscribe((data: ActorModel[]) => (this.actorMaleMostView = data));
  }

  ngOnInit(): void {}

  getMeanDurationMovie(movies: MovieModel[]): number {
    let mean = 0;
    movies.forEach(movie => {
      mean += movie.duration;
    });
    mean /= movies.length;
    return Math.round(mean);
  }
}
