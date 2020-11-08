export class Coffee {

    constructor(public id: number,
        public brand: string,
        public imagePath: string,
        public bean: string,
        public country: string,
        public rating: number,
        public loggedCups: number) { }
}