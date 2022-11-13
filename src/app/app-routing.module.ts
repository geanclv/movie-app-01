import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';

// Defining the routes in the app
const routes: Routes = [
  {
    path: "", //root
    component: HomeComponent //name of the class in *.component.ts
  },
  {
    path: "movies",
    component: MoviesComponent
  },
  {
    path: "**", //used as comodin, in this case for 404 cases
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
