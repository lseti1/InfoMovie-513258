import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tmdb } from '../tmdb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searched-list',
  imports: [CommonModule],
  templateUrl: './searched-list.html',
  styleUrls: ['./searched-list.css']
})
export class SearchedList {
  @Input() movies: any[] = [];
  @Output() showDetails = new EventEmitter<{show:boolean, index: number}>();

  constructor(
    private tmdb: Tmdb
  ) {}

  isReleased(releaseDateString: string): boolean {
    if (!releaseDateString) return false;
    const today = new Date();
    const releaseDate = new Date(releaseDateString);
    return releaseDate <= today;
  }

  onViewMoreClick(index: number): void {
    console.log("'True' Emitted & sending index value: ", index);
    this.showDetails.emit({show: true, index: index});
  }
}
