import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';
import { CarouselComponent } from './landing/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LandingComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
