import { Action } from '@ngrx/store';
import { DetailedCoffeeDto } from 'src/app/http.clients/api.client';

export const ADD_COFFEE = 'ADD_COFFEE';
export const ADD_COFFEES = 'ADD_COFFEES';
export const GET_SELECTED_COFFEE_BY_ID = 'GET_SELECTED_COFFEE_BY_ID';

export class AddCoffee implements Action {
    readonly type = ADD_COFFEE;

    constructor(public payload: DetailedCoffeeDto){}
}

export class AddCoffees implements Action {
    readonly type = ADD_COFFEES;

    constructor(public payload: DetailedCoffeeDto[]){}
}

export class GetSelectedCoffeeById implements Action {
    readonly type = GET_SELECTED_COFFEE_BY_ID;

    constructor(public payload: number){}
}

export type CoffeeActions = AddCoffee | AddCoffees | GetSelectedCoffeeById;