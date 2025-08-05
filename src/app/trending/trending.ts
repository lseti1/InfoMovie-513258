import { Component } from '@angular/core';
import { Tmdb } from '../tmdb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending',
  imports: [CommonModule],
  templateUrl: './trending.html',
  styleUrl: './trending.css'
})
export class Trending {

  trending: any[] = [];
  constructor(private tmdb: Tmdb) { }

  ngOnInit(): void {
    this.tmdb.getTrendingMovies().subscribe(data => {
      this.trending = data.results;
    });
  }
}
