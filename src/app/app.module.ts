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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


//npm components
import { BarRatingModule } from "ngx-bar-rating";


// coffee logger components
import { CoffeeCardComponent } from './coffee.components/coffee-card/coffee-card.component';
import { LogCoffeeComponent } from './coffee.components/log-coffee/log-coffee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoffeeTableComponent } from './coffee.components/coffee-table/coffee-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeCardComponent,
    LogCoffeeComponent,
    DashboardComponent,
    CoffeeTableComponent
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
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    
    // npm components
    BarRatingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
