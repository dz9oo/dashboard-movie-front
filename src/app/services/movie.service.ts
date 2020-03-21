import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MovieModel } from "../models/movie.model";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  movie$: Subject<MovieModel> = new Subject<MovieModel>();
  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>("http://localhost:3000/movies");
  }

  findMovie(id: number): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(`http://localhost:3000/movies/${id}`);
  }

  delete(movie: MovieModel): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/movies/${movie.id}`);
  }

  save(movie: MovieModel): Observable<MovieModel> {
    return this.http.post<MovieModel>(`http://localhost:3000/movies/`, movie);
  }

  update(movie: MovieModel): Observable<MovieModel> {
    return this.http.post<MovieModel>(
      `http://localhost:3000/movies/${movie.id}`,
      movie
    );
  }
}
