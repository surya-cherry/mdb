import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { BASE_URL } from './constants';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  movies;

  constructor( private http: HttpClient, private route: ActivatedRoute ) { }

  showMyMovies() {
    return this.http.get(`${BASE_URL}/movies`);
  }
  showMyMovieDetails(id: number) {
     return this.http.get(`${BASE_URL}/details?id=${id}`);
  }
  showMySeries() {
    return this.http.get(`${BASE_URL}/series`);
  }
  showMySeriesDetails(id: number) {
    return this.http.get(`${BASE_URL}/sdetails?id=${id}`);
  }
}
