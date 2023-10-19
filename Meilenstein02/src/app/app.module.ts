import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {RouterModule} from '@angular/router';
import {AboutComponent} from './features/about/page/about.component';
import {NgOptimizedImage} from "@angular/common";
import {NavbarComponent} from "./core/components/navbar/navbar.component";
import {PlaceholderComponent} from './features/placeholder/page/placeholder.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './features/home/home.component';
import { YourrecordsComponent } from './features/yourrecords/yourrecords.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    PlaceholderComponent,
    FooterComponent,
    FooterComponent,
    HomeComponent,
    YourrecordsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'placeholder', component: PlaceholderComponent},
      {path: 'your-records', component: YourrecordsComponent},
      {path: '', component: HomeComponent}
    ]),
    NgOptimizedImage,
    NgbCarousel,
    NgbSlide,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
