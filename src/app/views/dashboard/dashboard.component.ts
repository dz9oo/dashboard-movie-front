import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { MovieModel } from "src/app/models/movie.model";
import { ActorService } from "src/app/services/actor.service";
import { ActorModel } from "src/app/models/actor.model";
import { NumberValueAccessor } from "@angular/forms";

type HistoData = {
  listYear: number[];
  countYear: number[];
};

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
  listYearCount: HistoData;
  // listYear = ["2000", "2020", "2001", "2002", "2003", "2050", "2070", "2099"];
  // countYear: number[] = [1, 2, 2, 1, 2, 1, 3, 1].map(elem => elem * 2);
  listYear = [];
  countYear = [];
  constructor(
    private movieService: MovieService,
    private actorService: ActorService
  ) {
    this.movieService.getMovies().subscribe((data: MovieModel[]) => {
      (this.movies = data),
        (this.meanDurationMovies = this.getMeanDurationMovie(data)),
        this.getMoviePerYear(data);
    });

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

  getMoviePerYear(movies: MovieModel[]) {
    let setYear = new Set();
    movies.forEach(movie => {
      setYear.add(movie.year);
    });
    let listYear: any = [...setYear].sort();

    let countYear = Array(listYear.length).fill(0);
    movies.forEach(movie => {
      countYear[listYear.indexOf(movie.year)] += 1;
    });

    this.countYear = [
      {
        data: countYear,
        backgroundColor: "#2f82ff"
      }
    ];
    this.listYear = listYear;

    // return { listYear, countYear };
    // let res: HistoData = { listYear, countYear };
    // return res;
  }
}
