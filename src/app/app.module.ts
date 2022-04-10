import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeforeRatingComponent } from './components/before-rating/before-rating.component';
import { AfterRatingComponent } from './components/after-rating/after-rating.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    BeforeRatingComponent,
    AfterRatingComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
