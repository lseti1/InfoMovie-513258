import { Component, OnInit } from '@angular/core';
import { Tmdb } from '../tmdb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming',
  imports: [CommonModule],
  templateUrl: './upcoming.html',
  styleUrl: './upcoming.css'
})
export class Upcoming implements OnInit {
  public upcoming: any[] = [];

  constructor(
    private tmdb: Tmdb
  ) {}

  ngOnInit(): void {
    this.tmdb.getUpcomingMovies().subscribe(data => {
      this.upcoming = data.results;
    });
  }
}
