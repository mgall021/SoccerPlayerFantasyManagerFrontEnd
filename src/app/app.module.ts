import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FantasyTeamDescriptionComponent } from './fantasy-team-description/fantasy-team-description.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor } from './jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FantasyTeamDescriptionComponent,
    CarouselComponent,
    CreateComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor, 
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
