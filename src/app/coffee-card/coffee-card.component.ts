import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoffeeDialog } from 'src/models/coffee/coffee-dialog.model';
import { Coffee } from 'src/models/coffee/coffee.model';
import { LogCoffeeComponent } from './log-coffee/log-coffee.component';
import { CoffeeTableComponent } from './coffee-table/coffee-table.component';

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
          data: new CoffeeDialog(this.coffee.id, this.coffee.brand, this.coffee.imagePath)
        })
    }

    if (dialog === 'details') {
      this.dialog.open(
        CoffeeTableComponent,
        {
          panelClass: 'log-coffee-dialog',
          data: new CoffeeDialog(this.coffee.id, this.coffee.brand, this.coffee.imagePath)
        });
    }
  }
}
