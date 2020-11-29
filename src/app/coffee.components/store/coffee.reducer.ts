import { DetailedCoffeeDto } from '../../http.clients/api.client';
import * as CoffeeActions from './coffee.actions';

export interface InitialState {
    detailedCoffees: DetailedCoffeeDto[]
}

interface selectedCoffee {
    brandName?: string,
    imageUri?: string
  }

const initialState: InitialState = {
    detailedCoffees: []
};

export function coffeeReducer<Any, CoffeeActions>(state = initialState, action: CoffeeActions.CoffeeActions): InitialState {
    switch (action.type) {
        case CoffeeActions.ADD_COFFEE:
            return {
                ...state,
                detailedCoffees: [...state.detailedCoffees, action.payload as DetailedCoffeeDto]
            };
        case CoffeeActions.ADD_COFFEES:
            return {
                ...state,
                detailedCoffees: [...state.detailedCoffees, ...action.payload as DetailedCoffeeDto[]]
            };
        default: {
            return state;
        }
    }
}