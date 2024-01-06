import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CardComponent } from './components/card/card.component';
import { ModalMoviesDetailComponent } from './components/modal-movies-detail/modal-movies-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YoutubeVideoPlayerComponent } from './components/youtube-video-player/youtube-video-player.component';
import { HomeComponent } from './pages/home/home.component';

import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ModalMoviesDetailComponent,
    CardComponent,
    YoutubeVideoPlayerComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, MatIconModule],
})
export class MoviesModule {}
