import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/models/coffee/coffee.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coffeeList: Array<Coffee> = [
    {
      id: 1,
      brand: 'IEF & IDO',
      rating: 4.3,
      loggedCups: 130,
      bean: 'Arabica',
      country: 'Guatemala',
      imagePath: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
    },
    {
      id: 2,
      brand: 'IEF & IDO',
      rating: 1.2,
      loggedCups: 17,
      bean: 'Arabica',
      country: 'Mexico',
      imagePath: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
    },
    {
      id: 3,
      brand: 'BOON',
      rating: 2.3,
      loggedCups: 75,
      bean: 'Arabica',
      country: 'Brazilie',
      imagePath: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
    },
    {
      id: 4,
      brand: 'Giraffe',
      rating: 4.3,
      loggedCups: 45,
      bean: 'Arabica',
      country: 'Kenia',
      imagePath: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
    },
  ];
}
