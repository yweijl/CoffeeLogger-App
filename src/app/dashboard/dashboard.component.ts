import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/models/coffee/coffee.model';
import { coffeeDataSerivce } from '../services/coffee.data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  coffeeList: Coffee[];

  constructor(private coffeeDataService: coffeeDataSerivce) { }

  ngOnInit(): void {
    this.coffeeList = this.coffeeDataService.coffeeList;
  }

  onAddCoffee() {
    this.coffeeDataService.coffeeList.push(
      {
        id: 1,
        brand: 'joepie',
        country: 'belgie',
        imagePath: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png',
        bean: 'arabica',
        loggedCups: 1,
        rating: 3
      });
      console.log('a');
  }
}
