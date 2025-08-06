import { Component } from '@angular/core';
import { Tmdb } from '../tmdb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {
  trendingMovies: any[] = [];
  constructor(private tmdb: Tmdb) { }

  ngOnInit(): void {
    this.tmdb.getTrendingMovies().subscribe(data => {
      this.trendingMovies = data.results;
    });
  }
}
