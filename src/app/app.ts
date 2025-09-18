import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tmdb } from './tmdb';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from './header/header';
import { Trending } from './trending/trending';
import { Upcoming } from './upcoming/upcoming';
import { TopRated } from './top-rated/top-rated';
import { Footer } from './footer/footer';
import { SearchedList } from './searched-list/searched-list';
import { MovieDetail } from './movie-detail/movie-detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, Header, Trending, Upcoming, TopRated, Footer, SearchedList, MovieDetail],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('angularApp');

  public hasSearched = signal(false);
  public movies: any[] = [];
  public displayDetails = signal(false);
  private displayIndex = signal(-1);
  public selectedMovieId: any = null;

  constructor(
    private tmdb: Tmdb
  ) {}

  onSearchChange(event: {hasSearched: boolean, movies: any[]}): void {
    this.hasSearched.set(event.hasSearched);
    this.movies = event.movies;
    this.displayDetails.set(false);
  }

  toggleDetails(event: {show: boolean, index: number}): void {
    console.log("Showing Display Details: ", event.show);
    console.log("Showing Display Details for Index: ", event.index);
    this.displayDetails.set(event.show);
    this.displayIndex.set(event.index);

    if (event.show && this.movies[event.index]) {
      this.selectedMovieId = this.movies[event.index].id;
    } else {
      this.selectedMovieId = null;
    }
  }
}

