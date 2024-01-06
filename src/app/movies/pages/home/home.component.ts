import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  dataHome: any;
  search: string = '';

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies() {
    this.moviesService.GetMovies(this.search).subscribe(
      (resp: any) => {
        this.dataHome = resp;
        console.log(resp);
      },
      (error: any) => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }
}
