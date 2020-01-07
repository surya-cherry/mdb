import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies;
  api_url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    this.http.get(' http://localhost:3000/movies ').subscribe( (res) => {
      console.log(res);
      this.movies = res;
    });
  }
  ngOnInit() {
   }

}
