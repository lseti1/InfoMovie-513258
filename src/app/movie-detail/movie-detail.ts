import { Component, Input, SimpleChanges} from '@angular/core';
import { Tmdb } from '../tmdb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail {
  @Input() movieId!: number;
  selectedMovie: any = null;

  cast: any[] = [];
  crew: any[] = [];
  directors: any[] = [];
  writers: any[] = [];
  
  constructor(private tmdb: Tmdb) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movieId'] && this.movieId) {
      this.loadMovieDetails(this.movieId);
      this.loadMovieCredits(this.movieId);
    }
  }

  loadMovieDetails(id: number) {
    this.tmdb.getMovieDetails(id).subscribe(data => {
      console.log("Inside Movie-Detail.ts: Movie ID: ", id);
      this.selectedMovie = data;
      console.log(this.selectedMovie);
    });
  }

  loadMovieCredits(id: number) {
    this.tmdb.getMovieCredits(id).subscribe(data => {
      this.cast = data.cast;   
      this.crew = data.crew;     

      this.directors = this.crew.filter(person => person.job === 'Director');
      this.writers = this.crew.filter(person => ['Writer', 'Screenplay', 'Story', 'Author'].includes(person.job));
    });
  }
}
