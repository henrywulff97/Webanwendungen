import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {RouterModule} from '@angular/router';
import {AboutComponent} from './features/about/page/about.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgOptimizedImage} from "@angular/common";
import {NavbarComponent} from "./core/components/navbar/navbar.component";
import {PlaceholderComponent} from './features/placeholder/page/placeholder.component';
import { ModalComponent } from './core/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    PlaceholderComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: 'placeholder', component: PlaceholderComponent}
    ]),
    NgbModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
