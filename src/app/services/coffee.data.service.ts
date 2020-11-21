import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detailedCoffee } from '../interfaces/coffee.interfaces';
import { Record } from '../interfaces/record.interfaces';

@Injectable({ providedIn: 'root' })
export class coffeeDataSerivce {

    constructor(private http: HttpClient, ) { }

    coffeeList: Array<detailedCoffee> = [
        {
            id: 1,
            brandName: 'IEF & IDO',
            rating: 4.3,
            loggedCups: 130,
            coffeeType: 'Arabica',
            country: 'Guatemala',
            imageUri: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
        },
        {
            id: 2,
            brandName: 'IEF & IDO',
            rating: 1.2,
            loggedCups: 17,
            coffeeType: 'Arabica',
            country: 'Mexico',
            imageUri: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
        },
        {
            id: 3,
            brandName: 'BOON',
            rating: 2.3,
            loggedCups: 75,
            coffeeType: 'Arabica',
            country: 'Brazilie',
            imageUri: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
        },
        {
            id: 4,
            brandName: 'Giraffe',
            rating: 4.3,
            loggedCups: 45,
            coffeeType: 'Arabica',
            country: 'Kenia',
            imageUri: '../assets/Logos/IefIdo_CMYK_V2-Hersteld_Rondo-Mexico.png'
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

    coffeeRecordsColumns: string[] = ['Id', 'Date', 'Time', 'Dose In', 'Dose Out', 'Rating'];
    coffeeRecords: Record[] = [
        { id: 1, date: new Date(), time: 24, doseIn: 18, doseOut: 40, rating: 3, coffeeId: 1, flavors: []},
        { id: 2, date: new Date(-1), time: 22, doseIn: 18, doseOut: 39, rating: 4, coffeeId: 1 , flavors: []},
        { id: 3, date: new Date(-2), time: 28, doseIn: 18, doseOut: 39.2, rating: 3, coffeeId: 2 , flavors: []},
        { id: 4, date: new Date(-3), time: 29, doseIn: 18, doseOut: 41, rating: 4, coffeeId: 2 , flavors: []},
        { id: 5, date: new Date(-4), time: 21, doseIn: 18, doseOut: 40.4, rating: 3, coffeeId: 3 , flavors: []},
    ];

    getCoffeeRecordsByCoffeeId(id: number): Record[] {
        return this.coffeeRecords.filter(x => x.coffeeId === id);
    }
}