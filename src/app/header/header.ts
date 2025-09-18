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
  @Output() searchTriggered = new EventEmitter<{ hasSearched: boolean, movies: any[] }>();

  public query = '';
  private hasSearched = false;
  private movies: any[] = [];

  constructor(
    private tmdb: Tmdb
  ) {}

  search(): void {
    if (!this.query.trim()) return;

    this.tmdb.searchMovies(this.query).subscribe((response) => {
      this.movies = response.results;
      this.searchTriggered.emit({ hasSearched: true, movies: this.movies });
    })
  }

  resetSearch(): void {
    this.hasSearched = false;
    this.query = '';
    this.movies = [];

    this.searchTriggered.emit({ hasSearched: false, movies: this.movies });
  }
}
