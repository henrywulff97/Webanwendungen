import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {RouterModule} from '@angular/router';
import {AboutComponent} from './features/about/page/about.component';
import {NgOptimizedImage} from "@angular/common";
import {NavbarComponent} from "./core/components/navbar/navbar.component";
import {PlaceholderComponent} from './features/placeholder/page/placeholder.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    PlaceholderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'placeholder', component: PlaceholderComponent}
    ]),
    NgOptimizedImage,
    NgbCarousel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
