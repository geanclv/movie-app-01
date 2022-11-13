import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url: string = "https://api.themoviedb.org/3/movie/popular?api_key=6e0c52ac7ca36789f3e7492ce47a783c";

  constructor(
    private http: HttpClient
  ) { }

  // Creating my methods
  getMovies() {
    return this.http.get(this.url);
  }
}
