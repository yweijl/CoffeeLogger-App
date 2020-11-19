export interface CoffeeRecord {
    id: number;
    date: Date;
    time: number;
    doseIn: number;
    doseOut: number;
    grind: string;
    rating: number;
    flavors: string[]
    coffeeId: number;
  }