import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Movies } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  private MoviebaseUrlSearch : string =  environment.MovieUrlSearch
  private MoviebaseUrlAll : string =  environment.MovieUrlAll
  private ApiKey: string = environment.ApiKey

  movies: Movies | undefined
  page: number = 1

  GetMovies(search: string) {
    let url: string;

    if (search.length > 1) {
      url = `${this.MoviebaseUrlSearch}?query=${search}&api_key=${this.ApiKey}`;
    } else {
      url = `${this.MoviebaseUrlAll}?page=${this.page}&api_key=${this.ApiKey}`;
    }

    return this.http.get(url)

  }

}
