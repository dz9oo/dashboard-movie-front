import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./views/homepage/homepage.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { SigninComponent } from "./views/signin/signin.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "signin", component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
