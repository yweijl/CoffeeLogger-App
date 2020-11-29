import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecordClient, RecordDto } from 'src/app/http.clients/api.client';
import { DataSerivce } from 'src/app/services/data.service';

@Component({
  selector: 'app-coffee-table',
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.scss']
})
export class CoffeeTableComponent implements OnInit {

  coffeeRecordsColumns: string[]
  coffeeRecords: RecordDto[];

  constructor(
    private readonly recordClient:RecordClient,
    @Inject(MAT_DIALOG_DATA) private data: {id:number},
    private coffeeDataService:DataSerivce) {
  }

  ngOnInit(): void {
    this.coffeeRecordsColumns = this.coffeeDataService.coffeeRecordsColumns;
    // Get List By Id
    this.recordClient.getList().subscribe(response =>{
      this.coffeeRecords = response
    })
  }

  getAverage(selector: string) {
    if (this.coffeeRecords.length === 1){
      return this.coffeeRecords[0][selector];
    }


    const sum = this.coffeeRecords.reduce((accumulator, record) => accumulator + record[selector], 0);
    const avg = (sum / this.coffeeRecords.length);
    Math.round((avg + Number.EPSILON) * 100) / 100
    return avg;
  }
}