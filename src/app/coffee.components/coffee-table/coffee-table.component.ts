import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoffeeRecord } from 'src/app/interfaces/coffee-record.interface';
import { coffeeDataSerivce } from 'src/app/services/coffee.data.service';

@Component({
  selector: 'app-coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.scss']
})
export class CoffeeTableComponent implements OnInit {

  coffeeRecordsColumns: string[]
  coffeeRecords: CoffeeRecord[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: {id:number},
    private dialogRef: MatDialogRef<CoffeeTableComponent>,
    private coffeeDataService:coffeeDataSerivce) {
  }

  ngOnInit(): void {
    this.coffeeRecords = this.coffeeDataService.getCoffeeRecordsByCoffeeId(this.data.id);
    this.coffeeRecordsColumns = this.coffeeDataService.coffeeRecordsColumns;
  }

  getAverage(selector: string) {
    const sum = this.coffeeRecords.reduce((accumulator, record) => accumulator + record[selector], 0);
    const avg = (sum / this.coffeeRecords.length);
    Math.round((avg + Number.EPSILON) * 100) / 100
    return avg;
  }
}