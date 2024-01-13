import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movies } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private MoviebaseUrlSearch: string = environment.MovieUrlSearch;
  private MoviebaseUrlAll: string = environment.MovieUrlAll;
  private ApiKey: string = environment.ApiKey;

  movies: Movies | undefined;

  GetMovies(page?: string) {
    let url: string;
    url = `${this.MoviebaseUrlAll}?page=${page ? page : '1'}&api_key=${
      this.ApiKey
    }`;
    return this.http.get(url);
  }

  GetSearch(search: string, type: string, page?: string) {
    let url = `${this.MoviebaseUrlSearch}/${type}?query=${search}&page=${
      page ? page : '1'
    }&api_key=${this.ApiKey}`;
    return this.http.get(url);
  }
}
