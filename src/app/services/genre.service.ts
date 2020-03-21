import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GenreModel } from "../models/genre.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GenreService {
  constructor(private http: HttpClient) {}

  getGenres(): Observable<GenreModel[]> {
    return this.http.get<GenreModel[]>("http://localhost:3000/genres");
  }

  findGenre(id: number): Observable<GenreModel[]> {
    return this.http.get<GenreModel[]>(`http://localhost:3000/genres/${id}`);
  }

  delete(genre: GenreModel): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/genres/${genre.id}`);
  }

  save(genre: GenreModel): Observable<GenreModel> {
    return this.http.post<GenreModel>(`http://localhost:3000/genres/`, genre);
  }

  update(genre: GenreModel): Observable<GenreModel> {
    return this.http.post<GenreModel>(
      `http://localhost:3000/genres/${genre.id}`,
      genre
    );
  }
}
