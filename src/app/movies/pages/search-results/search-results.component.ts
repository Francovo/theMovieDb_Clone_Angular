import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  inputSearch: string = '';
  dataCache: { [key: string]: any } = {};
  dataSearch: any;
  type: string = 'movie';
  page: string = '1';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.inputSearch = params['search'];
      this.searchMulti(this.type);
    });
  }

  searchMulti(type?: any) {
    // Verificar si ya existe la data en caché para el tipo actual
    if (this.dataCache[type]) {
      this.dataSearch = this.dataCache[type];
    } else {
      this.moviesService
        .GetSearch(this.inputSearch, type ? type : this.type, this.page)
        .subscribe(
          (resp: any) => {
            this.dataSearch = resp;
            // Almacenar la data en caché para reutilizarla
            this.dataCache[type ? type : this.type] = resp;
            console.log('Respuesta de la búsqueda', resp);
          },
          (error: any) => {
            console.error('Error al obtener las películas:', error);
          }
        );
    }
  }

  filterMovies() {
    this.type = 'movie';
    this.searchMulti(this.type);
  }

  filterTv() {
    this.type = 'tv';
    this.searchMulti(this.type);
  }

  filterUsers() {
    this.type = 'person';
    this.searchMulti(this.type);
  }
}
