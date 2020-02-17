import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { SeriesComponent } from './series/series.component';
import { DetailsComponent } from './movies/details/details.component';
import { HomeComponent } from './home/home.component';
import { SdetailsComponent } from './series/sdetails/sdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './home/signup/signup.component';
import { CommonServiceService } from './common-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    FaqComponent,
    AboutComponent,
    SeriesComponent,
    DetailsComponent,
    HomeComponent,
    SdetailsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
         path: 'movies',
         component: MoviesComponent
      },
      {
         path: 'series',
         component: SeriesComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'home/signup',
        component: SignupComponent
      }
   ])
  ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
