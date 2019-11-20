import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies =[];
  @Output() selectedMovie = new EventEmitter();
  @Output() editedMovie = new EventEmitter();
  @Output() createNewMovie = new EventEmitter();
  @Output() deletedMovie = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  movieClicked(movie) {
    this.selectedMovie.emit(movie);
  }

  editMovie(movie) {
    this.editedMovie.emit(movie);
  }

  newMovie(movie) {
    this.createNewMovie.emit();
  }

  deleteMovie(movie) {
    this.deletedMovie.emit(movie);
  }
  
}
