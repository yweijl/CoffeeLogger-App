import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LogCoffeeComponent } from './log-coffee/log-coffee.component';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent implements OnInit {

  title = 'CoffeeLogger';
  brand = 'IEF & IDO'
  cardImage = '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
  rate = 4;
  bean = 'Arabica';
  country = 'Guatemala'
  cups = 214;
  
  constructor(public dialog: MatDialog){ }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LogCoffeeComponent);
  }

}
