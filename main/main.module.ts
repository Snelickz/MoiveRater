import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule} from '@angular/router';

import { ApiService } from '../api.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';



const routes: Routes = [
  {path: 'movies', component: MainComponent}
];

@NgModule({
  declarations: [MainComponent, MovieFormComponent, MovieDetailsComponent, MovieListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFontAwesomeModule,
    ReactiveFormsModule,

  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
