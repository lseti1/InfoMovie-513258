import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tmdb } from './tmdb';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('angularApp');

  hasSearched = false;
  movies: any[] = [];
  query = '';

  trending: any[] = [];
  topRated: any[] = [];

  constructor(private tmdb: Tmdb) {}

  search() {
    if (!this.query.trim()) return;

    this.hasSearched = true;
    this.tmdb.searchMovies(this.query).subscribe((response) => {
      this.movies = response.results;
    })
  }

  resetSearch() {
    this.hasSearched = false;
    this.query = '';
    this.movies = [];
  }

  ngOnInit(): void {
    this.tmdb.getTrendingMovies().subscribe(data => {
      this.trending = data.results;
    });

    this.tmdb.getTopRated().subscribe(data => {
      this.topRated = data.results;
    });
  }
}
