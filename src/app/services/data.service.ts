import { Injectable } from '@angular/core';
import { CoffeeClient, DetailedCoffeeDto } from '../http.clients/api.client'
import { Store } from '@ngrx/store';
import { AddCoffees } from '../coffee.components/store/coffee.actions';

@Injectable({ providedIn: 'root' })
export class DataSerivce {

    private detailedCoffees: DetailedCoffeeDto[];
    get DetailedCoffees(): DetailedCoffeeDto[] {
        return this.detailedCoffees;
    }

    constructor(
        private store: Store<{coffee: {detailedCoffees: DetailedCoffeeDto[]}}>,
        private coffeeClient: CoffeeClient) {
    }

    LoadDetailedCoffees() {
        this.coffeeClient.getDetailedList().subscribe(response => {
            this.store.dispatch(new AddCoffees(response));
        });
    }

    flavorList: string[] = [
        'Nuts',
        'Wattery',
        'Full',
        'Fruity',
        'Chocolate',
        'Sour',
        'Bitter',
        'Sweet'
    ];

    coffeeRecordsColumns: string[] = ['Id', 'Date', 'Time', 'Dose In', 'Dose Out', 'Rating'];
}