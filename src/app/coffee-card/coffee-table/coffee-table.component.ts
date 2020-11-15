import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoffeeDialog } from 'src/models/coffee/coffee-dialog.model';

export interface CoffeeRecord {
  id: number;
  date: Date;
  time: number;
  doseIn: number;
  doseOut: number;
  grind: string,
  rating: number
}

@Component({
  selector: 'app-coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.scss']
})
export class CoffeeTableComponent implements OnInit {
  brand: string;
  imagePath: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: CoffeeDialog,
    private dialogRef: MatDialogRef<CoffeeTableComponent>) {
    this.brand = data.brand;
    this.imagePath = data.imagePath;
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Id', 'Date', 'Grind', 'Time', 'Dose In', 'Dose Out', 'Rating'];
  coffeeRecords: CoffeeRecord[] = [
    { id: 1, date: new Date(), time: 24, doseIn: 18, doseOut: 40, grind: 'fine', rating: 3 },
    { id: 2, date: new Date(-1), time: 22, doseIn: 18, doseOut: 39, grind: 'fine', rating: 4 },
    { id: 3, date: new Date(-2), time: 28, doseIn: 18, doseOut: 39.2, grind: 'fine', rating: 3 },
    { id: 4, date: new Date(-3), time: 29, doseIn: 18, doseOut: 41, grind: 'fine', rating: 4 },
    { id: 5, date: new Date(-4), time: 21, doseIn: 18, doseOut: 40.4, grind: 'fine', rating: 3 },
  ];

  getAverage(selector: string) {
    const sum = this.coffeeRecords.reduce((accumulator, record) => accumulator + record[selector], 0);
    const avg = (sum / this.coffeeRecords.length);
    return avg;
  }
}
