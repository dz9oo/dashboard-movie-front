import { Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

interface UserAuth {
  message: string;
  user: UserModel;
  token: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private userSubject: BehaviorSubject<UserModel>; // ...Pour mettre à jour les observables...
  private user$: Observable<UserModel>;

  constructor(private http: HttpClient) {
    const user = JSON.parse(localStorage.getItem("user_storage"));
    this.userSubject = new BehaviorSubject<UserModel>(user);
    this.user$ = this.userSubject.asObservable();
  }

  get user(): UserModel {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<UserModel> {
    const values = { email: email, password: password };

    return this.http
      .post<UserAuth>("http://localhost:3000/users/signin", values)
      .pipe(tap(data => console.log(data)))
      .pipe(
        map(({ user, token }) => {
          localStorage.setItem("user_storage", JSON.stringify(email));
          localStorage.setItem("user_token", JSON.stringify(token));
          this.userSubject.next(user);
          // this.infoLogin$.next(true);
          return user;
        })
      );
  }

  getToken(): string {
    return localStorage.getItem("user_token");
  }

  isAuth(): boolean {
    const token = localStorage.getItem("user_token") || false;
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
