import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/';
  baseMovieUrl = `${this.baseUrl}api/movies/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  getMovies() {
    return this.httpClient.get(this.baseMovieUrl, {headers: this.getAuthHeaders()});
  }

  getMovie(id: number) {
    return this.httpClient.get(`${this.baseMovieUrl}${id}`, {headers: this.getAuthHeaders()});
  }

  rateMovie(rate: number, movieId: number) {
    const body = JSON.stringify({stars: rate});
    return this.httpClient.post(`${this.baseMovieUrl}${movieId}/rate_movie/`, body, {headers: this.getAuthHeaders()});
  }

  createMovie(title: string, description: string) {
    const body = JSON.stringify({title, description});
    return this.httpClient.post(`${this.baseMovieUrl}`, body, {headers: this.getAuthHeaders()});
  }

  updateMovie(id: number, title: string, description: string) {
    const body = JSON.stringify({title, description});
    return this.httpClient.put(`${this.baseMovieUrl}${id}/`, body, {headers: this.getAuthHeaders()});
  }

  deleteMovie(id: number) {
    return this.httpClient.delete(`${this.baseMovieUrl}${id}/`, {headers: this.getAuthHeaders()});
  }

  loginUser(authData) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`, body, {headers: this.getAuthHeaders()});
  }

  registerUser(authData) {
    const body = JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}api/users/`, body, {headers: this.headers});
  }

  getAuthHeaders() {
    const token = this.cookieService.get('mr-token')
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    })
  }
}

