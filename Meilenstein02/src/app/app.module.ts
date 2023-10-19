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
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { YourrecordsComponent } from './features/yourrecords/yourrecords.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    PlaceholderComponent,
    ModalComponent,
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
    NgbModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
