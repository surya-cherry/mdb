import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { SeriesComponent } from './series/series.component';
import { DetailsComponent } from './movies/details/details.component';
import { HomeComponent } from './home/home.component';
import { SdetailsComponent } from './series/sdetails/sdetails.component';
import { SignupComponent } from './home/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'sdetails/:id', component: SdetailsComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
