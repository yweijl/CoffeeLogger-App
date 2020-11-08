import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-coffee',
  templateUrl: './log-coffee.component.html',
  styleUrls: ['./log-coffee.component.scss'],
})
export class LogCoffeeComponent implements OnInit {

  brand: string = 'IEF & IDO'
  rate: number = 5;
  cardImage: string = '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
  color: string = 'blue';
  flavorList: string[] = ['fruit', 'sour', 'bitter', 'sweet', 'full', 'chocolate', 'nuts', 'watery', 'light', 'full', 'strong', 'heavy '];
  flavors = new FormControl();

  coffeeLogFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor() { }

  
  ngOnInit(): void {
  }

}
