import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MMDB';
  movies;
  api_url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {
    this.http.get(' http://localhost:3000/movies ').subscribe( (res) => {
      console.log(res);
      this.movies = res;
    });
  }
}
