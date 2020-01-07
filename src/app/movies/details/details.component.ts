import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movies;
  api_url = 'http://localhost:3000/';
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.http.get(`http://localhost:3000/details?id=${params.id}`).subscribe( (res) => {
        console.log(res);
        this.movies = res;
      });
    } );
  }
  ngOnInit() {
   }
}
