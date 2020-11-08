import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoffeeDialog } from 'src/models/coffee/coffee-dialog.model';
import { Coffee } from 'src/models/coffee/coffee.model';
import { LogCoffeeComponent } from './log-coffee/log-coffee.component';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent implements OnInit {

  @Input() coffee: Coffee;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LogCoffeeComponent, { panelClass: 'log-coffee-dialog', disableClose: true, data: new CoffeeDialog(this.coffee.id, this.coffee.brand, this.coffee.imagePath) } );
  }
}
