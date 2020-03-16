import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/models/user.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [Validators.required, Validators.pattern("[a-zA-Z0-9!$@#]{6,20}")]
      ]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const user = this.form.value as UserModel;

      this.authService
        .login(user.email, user.password)
        .subscribe((data: UserModel) => {
          this.router.navigate(["/"]);
        });
      console.log(this.form.value);
    }
  }
}
