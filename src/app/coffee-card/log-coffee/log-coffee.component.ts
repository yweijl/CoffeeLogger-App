import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoffeeDialog } from 'src/models/coffee/coffee-dialog.model';
import { LogCoffee } from 'src/models/coffee/log-coffee.model';

@Component({
  selector: 'app-log-coffee',
  templateUrl: './log-coffee.component.html',
  styleUrls: ['./log-coffee.component.scss'],
})
export class LogCoffeeComponent implements OnInit {

  logCoffee: LogCoffee;
  brand: string;
  imagePath: string;
  flavors = new FormControl();
  flavorList: string[] = [
    'Nuts',
    'Wattery',
    'Full',
    'Fruity',
    'Chocolate',
    'Sour',
    'Bitter',
    'Sweet'
  ];

  coffeeLogFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    @Inject(MAT_DIALOG_DATA) data: CoffeeDialog,
    private dialogRef: MatDialogRef<LogCoffeeComponent>) {
    this.logCoffee = new LogCoffee(data.coffeeId, 0, 0, 0, 0, []);
    this.brand = data.brand;
    this.imagePath = data.imagePath;
  }

  ngOnInit(): void {
  }

  public save() {
    this.dialogRef.close();
  }
}
