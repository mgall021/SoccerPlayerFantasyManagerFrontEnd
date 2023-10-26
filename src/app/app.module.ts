import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FantasyTeamDescriptionComponent } from './landing/fantasy-team-description/fantasy-team-description.component';



@NgModule({
  declarations: [AppComponent, FantasyTeamDescriptionComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
