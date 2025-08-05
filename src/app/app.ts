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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, Header, Trending, Upcoming, TopRated, Footer, SearchedList],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('angularApp');

  hasSearched = signal(false);
  movies: any[] = [];

  constructor(private tmdb: Tmdb) { }

  onSearchChange(event: { hasSearched: boolean, movies: any[] }) {
    this.hasSearched.set(event.hasSearched);
    this.movies = event.movies;
  }
}

