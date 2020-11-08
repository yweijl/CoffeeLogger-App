export class LogCoffee {
    constructor(
        public coffeeId: number,
        public doseIn: number,
        public doseOut: number,
        public time: number,
        public rating: number,
        public flavors: string[]) { }
}