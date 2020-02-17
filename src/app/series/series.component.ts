import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  series;
  api_url = 'http://localhost:3000/';

  constructor(private commonservice: CommonServiceService, private router: Router) {
  }

  ngOnInit() {
    this.commonservice.showMySeries().subscribe( (res) => {
      console.log(res);
      this.series = res;
    });
  }
  seriesMethod(id: number) {
    this.router.navigate(['/sdetails'], { queryParams: { id: id } });
   }

}
