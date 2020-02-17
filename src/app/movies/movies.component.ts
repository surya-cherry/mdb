import { Component, OnInit, Inject } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import {Router} from '@angular/router';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any;
  api_url = 'http://localhost:3000/';

  constructor(private commonservice: CommonServiceService, private router: Router/*, public dialog: MatDialog*/) {
  }
  ngOnInit() {
    this.commonservice.showMyMovies().subscribe( (res) => {
      console.log(res);
      this.movies = res;
    });
   }
   moviesMethod(id: number) {
    this.router.navigate(['/details'], { queryParams: { id: id } });
   }
  //  openDialog(): void {
  //   const dialogRef = this.dialog.open(movie-dialog, {
  //     width: '500px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}

// @Component({
//   // tslint:disable-next-line:component-selector
//   selector: 'movie-dialog',
//   templateUrl: 'movie-dialog.html',
// })
// export class movie-dialog {

//   constructor(
//     public dialogRef: MatDialogRef < movie-dialog >, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
