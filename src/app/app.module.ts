import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./views/homepage/homepage.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { SigninComponent } from "./views/signin/signin.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// import Angular Material:
import { MatMenuModule } from "@angular/material/menu";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { CardListComponent } from "./views/dashboard/card-list/card-list.component";
import { CardHistoComponent } from "./views/dashboard/card-histo/card-histo.component";
import { CardBarComponent } from "./views/dashboard/card-bar/card-bar.component";
import { CardDiagramComponent } from "./views/dashboard/card-diagram/card-diagram.component";
import { CardComponent } from './views/homepage/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    SigninComponent,
    NavbarComponent,
    CardListComponent,
    CardHistoComponent,
    CardBarComponent,
    CardDiagramComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
