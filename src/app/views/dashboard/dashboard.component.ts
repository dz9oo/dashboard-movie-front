import { Component, OnInit } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { MovieModel } from "src/app/models/movie.model";
import { ActorService } from "src/app/services/actor.service";
import { GenreService } from "src/app/services/genre.service";
import { ActorModel } from "src/app/models/actor.model";
import { NumberValueAccessor } from "@angular/forms";
import { GenreModel } from "src/app/models/genre.model";

type HistoData = {
  listYear: number[];
  countYear: number[];
};

type GenreMovie = {
  listGenreID: number[];
  countGenreFromMovies: number[];
  listGenreName: string[];
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
  genreFromMovies: GenreMovie;
  genreList: GenreModel[];
  listYear = [];
  countYear = [];
  barChartLabels = [];
  barChartData = [];
  constructor(
    private movieService: MovieService,
    private actorService: ActorService,
    private genreService: GenreService
  ) {
    this.movieService.getMovies().subscribe((data: MovieModel[]) => {
      (this.movies = data),
        (this.meanDurationMovies = this.getMeanDurationMovie(data)),
        this.getMoviePerYear(data),
        this.getGenreFromMovie(data);
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

  getMoviePerYear = (movies: MovieModel[]) => {
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
        backgroundColor: "#2f82ff",
        listGenreName: []
      }
    ];
    this.listYear = listYear;
  };

  getGenreFromMovie = (movies: MovieModel[]) => {
    let setGenre = new Set();
    movies.forEach(movie => {
      setGenre.add(movie.genreId);
    });
    let listGenreID: number[] = [...setGenre].sort() as number[];

    let countGenreFromMovies: number[] = Array(listGenreID.length).fill(0);
    movies.forEach(movie => {
      countGenreFromMovies[listGenreID.indexOf(movie.genreId)] += 1;
    });

    this.genreService.getGenres().subscribe((data: GenreModel[]) => {
      this.genreList = data;
      let listGenreName: any[] = Array(listGenreID.length).fill(0);
      data.forEach(genre => {
        if (genre.id === listGenreID.find(elt => elt === genre.id)) {
          listGenreName.push(genre.name);
        }
      });
      //TODO Probleme ici !!
      /*  listGenreName est un tableau dont les 4 premières cases est à 0
        console.log(listGenreName) // ["0","0","0","0","comedy", "fantasy", "war", "sci-fi"]
      */
      // console.log(listGenreName);
      listGenreName.splice(0, 4); // rustine pour enlever les quatres "0"
      this.barChartLabels = listGenreName;
      this.barChartData = [
        { data: countGenreFromMovies, backgroundColor: "#FFF" }
      ];
      this.genreFromMovies = {
        listGenreID,
        countGenreFromMovies,
        listGenreName
      };
    });
  };
}
