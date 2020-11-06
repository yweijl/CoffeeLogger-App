import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material components
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

//npm components
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    // material components
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    
    // npm components
    BarRatingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
