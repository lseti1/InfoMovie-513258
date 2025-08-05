import { Component, OnInit} from '@angular/core';
import { Tmdb } from '../tmdb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-rated',
  imports: [CommonModule],
  templateUrl: './top-rated.html',
  styleUrls: ['./top-rated.css']
})
export class TopRated implements OnInit {
  topRated: any[] = [];
  constructor(private tmdb: Tmdb) { }

  ngOnInit(): void {
    this.tmdb.getTopRated().subscribe(data => {
      this.topRated = data.results;
    });
  }
}
