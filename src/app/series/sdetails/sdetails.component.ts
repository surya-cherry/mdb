import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sdetails',
  templateUrl: './sdetails.component.html',
  styleUrls: ['./sdetails.component.scss']
})
export class SdetailsComponent implements OnInit {
  series;
  api_url = 'http://localhost:3000/';
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.http.get(`http://localhost:3000/sdetails?id=${params.id}`).subscribe( (res) => {
        console.log(res);
        this.series = res;
      });
    } );
  }
  ngOnInit() {
  }

}
