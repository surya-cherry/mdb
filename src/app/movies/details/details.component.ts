import { Component, OnInit } from '@angular/core';
import {CommonServiceService} from '../../common-service.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movies;
  sub: any;
  id: number;
  api_url = 'http://localhost:3000/';
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private commonservice: CommonServiceService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.sub = this.route.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.detailsMethod(+params['id'] || 0);

      });
   }

   detailsMethod(id: number) {
    this.commonservice.showMyMovieDetails(id).subscribe( (res) => {
      console.log(res);
      this.movies = res;
    });
   }
}
