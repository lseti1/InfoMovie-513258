import { Component, EventEmitter, Output } from '@angular/core';
import { Tmdb } from '../tmdb';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  query = '';
  hasSearched = false;
  movies: any[] = [];

  constructor(private tmdb: Tmdb) { }

  @Output() searchTriggered = new EventEmitter<{ hasSearched: boolean, movies: any[] }>();

  search() {
    if (!this.query.trim()) return;

    this.tmdb.searchMovies(this.query).subscribe((response) => {
      this.movies = response.results;
      this.searchTriggered.emit({ hasSearched: true, movies: this.movies });
    })
  }

  resetSearch() {
    this.hasSearched = false;
    this.query = '';
    this.movies = [];

    this.searchTriggered.emit({ hasSearched: false, movies: this.movies });
  }
}
