import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "../models/user.model";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/xml",
    Authorization: "jwt-token"
  })
};

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(
      `http://localhost:3000/users/signin`,
      user,
      httpOptions
    );
  }
}
