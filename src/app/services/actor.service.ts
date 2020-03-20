import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActorModel } from "../models/actor.model";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ActorService {
  actor$: Subject<ActorModel> = new Subject<ActorModel>();
  constructor(private http: HttpClient) {}

  getActors(): Observable<ActorModel[]> {
    return this.http.get<ActorModel[]>(`http://localhost:3000/actors`);
  }

  getActorsFemale(): Observable<ActorModel[]> {
    return this.http.get<ActorModel[]>(`http://localhost:3000/actors/female`);
  }

  getActorsMale(): Observable<ActorModel[]> {
    return this.http.get<ActorModel[]>(`http://localhost:3000/actors/male`);
  }

  getActorsFemaleMostView(): Observable<ActorModel[]> {
    return this.http.get<ActorModel[]>(
      `http://localhost:3000/actors/female/mostview`
    );
  }
  getActorsMaleMostView(): Observable<ActorModel[]> {
    return this.http.get<ActorModel[]>(
      `http://localhost:3000/actors/male/mostview`
    );
  }
}
