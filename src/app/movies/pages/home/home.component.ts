import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private moviesService: MoviesService, private router: Router) {}

  dataHome: any;
  search: string = '';

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies() {
    this.moviesService.GetMovies().subscribe(
      (resp: any) => {
        this.dataHome = resp;
      },
      (error: any) => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  goToSearch() {
    this.router.navigate(['/search', this.search]);
  }
}
