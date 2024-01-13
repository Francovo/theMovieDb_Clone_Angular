import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CardComponent } from './components/card/card.component';
import { ModalMoviesDetailComponent } from './components/modal-movies-detail/modal-movies-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YoutubeVideoPlayerComponent } from './components/youtube-video-player/youtube-video-player.component';
import { HomeComponent } from './pages/home/home.component';

import { FormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.module';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { CardSearchComponent } from './components/card-search/card-search.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ModalMoviesDetailComponent,
    CardComponent,
    YoutubeVideoPlayerComponent,
    SearchResultsComponent,
    CardSearchComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, MatIconModule, FormsModule],
  exports: [NavbarComponent],
})
export class MoviesModule {}
