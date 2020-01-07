import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series;
  api_url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    this.http.get(' http://localhost:3000/series ').subscribe( (res) => {
      console.log(res);
      this.series = res;
    });
  }

  ngOnInit() {
  }

}
