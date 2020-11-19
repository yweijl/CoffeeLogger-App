import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Coffee } from 'src/models/coffee/coffee.model';
import { LogCoffeeComponent } from '../log-coffee/log-coffee.component';
import { CoffeeTableComponent } from '../coffee-table/coffee-table.component';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent implements OnInit {

  @Input() coffee: Coffee;
  constructor(public dialog: MatDialog) { 
  }

  ngOnInit(): void {
  }

  openDialog(dialog: string) {
    if (dialog === 'log') {
      this.dialog.open(
        LogCoffeeComponent,
        {
          panelClass: 'log-coffee-dialog',
          disableClose: true,
          data: {id: this.coffee.id}
        })
    }

    if (dialog === 'details') {
      this.dialog.open(
        CoffeeTableComponent,
        {
          panelClass: 'log-coffee-dialog',
          data: {id: this.coffee.id}
        });
    }
  }
}
