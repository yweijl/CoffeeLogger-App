import { Injectable } from '@angular/core';
import { Coffee } from 'src/models/coffee/coffee.model';
import { CoffeeRecord } from '../interfaces/coffee-record.interface';

@Injectable({ providedIn: 'root' })
export class coffeeDataSerivce {
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

    coffeeRecordsColumns: string[] = ['Id', 'Date', 'Grind', 'Time', 'Dose In', 'Dose Out', 'Rating'];
    coffeeRecords: CoffeeRecord[] = [
        { id: 1, date: new Date(), time: 24, doseIn: 18, doseOut: 40, grind: 'fine', rating: 3, flavors: [ ], coffeeId: 1,  },
        { id: 2, date: new Date(-1), time: 22, doseIn: 18, doseOut: 39, grind: 'fine', rating: 4, flavors: [ ], coffeeId: 1 },
        { id: 3, date: new Date(-2), time: 28, doseIn: 18, doseOut: 39.2, grind: 'fine', rating: 3, flavors: [ ], coffeeId: 2 },
        { id: 4, date: new Date(-3), time: 29, doseIn: 18, doseOut: 41, grind: 'fine', rating: 4, flavors: [ ], coffeeId: 2 },
        { id: 5, date: new Date(-4), time: 21, doseIn: 18, doseOut: 40.4, grind: 'fine', rating: 3, flavors: [ ], coffeeId: 3 },
    ];

    getCoffeeRecordsByCoffeeId(id: number): CoffeeRecord[] {
        return this.coffeeRecords.filter(x => x.coffeeId === id);
    }

    addLoggedCoffee(coffeeRecord: CoffeeRecord) {
        this.coffeeRecords.push(coffeeRecord);
    }
}