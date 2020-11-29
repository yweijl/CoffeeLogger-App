import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DetailedCoffeeDto, IDetailedCoffeeDto } from '../http.clients/api.client';
import { DataSerivce } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  coffeeList: Observable<{detailedCoffees: DetailedCoffeeDto[]}>;

  constructor(
    private store: Store<{coffee: {detailedCoffees: DetailedCoffeeDto[]}}>,
    private dataService: DataSerivce) { }

  ngOnInit(): void {
    this.coffeeList = this.store.select('coffee');
    this.dataService.LoadDetailedCoffees();
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
  }
}
