import { Component, OnInit } from '@angular/core';
import { CoffeeClient, DetailedCoffeeDto, IDetailedCoffeeDto } from '../http.clients/api.client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [CoffeeClient]
})
export class DashboardComponent implements OnInit {

  coffeeList: DetailedCoffeeDto[];

  constructor(private coffeeClient: CoffeeClient) { }

  ngOnInit(): void {
    this.coffeeClient.getDetailedList().subscribe(response => {
      this.coffeeList = response;
    });
  }

  onAddCoffee() {
    const x: IDetailedCoffeeDto = {
      id: 1,
      brandName: 'joepie',
      country: 'belgie',
      imageUri: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png',
      coffeeType: 'arabica',
      rating: 3,
      loggedRecords: 1
    };

    this.coffeeList.push(new DetailedCoffeeDto(x));
  }
}
