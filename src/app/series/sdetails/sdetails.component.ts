import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from '../../common-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sdetails',
  templateUrl: './sdetails.component.html',
  styleUrls: ['./sdetails.component.scss']
})
export class SdetailsComponent implements OnInit {
  series;
  sub: any;
  id: number;
  api_url = 'http://localhost:3000/';
  constructor(private commonservice: CommonServiceService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.sub = this.route.queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.sdetailsMethod(+params['id'] || 0);
    });
  }

  sdetailsMethod(id: number) {
    this.commonservice.showMySeriesDetails(id).subscribe( (res) => {
      console.log(res);
      this.series = res;
    });
   }

}
