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

  movies: any[] = [];
  query = '';

  constructor(private tmdb: Tmdb) {}

  search() {
    if (!this.query.trim()) return;
    this.tmdb.searchMovies(this.query).subscribe((response) => {
      this.movies = response.results;
    })
  }
}
