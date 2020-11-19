import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { coffeeDataSerivce } from 'src/app/services/coffee.data.service';
import { CoffeeRecord } from 'src/app/interfaces/coffee-record.interface';

@Component({
  selector: 'app-log-coffee',
  templateUrl: './log-coffee.component.html',
  styleUrls: ['./log-coffee.component.scss']
})
export class LogCoffeeComponent implements OnInit {
  logCoffeeForm: FormGroup;
  selectedCoffee: selectedCoffee
  brand: string;
  imagePath: string;
  flavors = new FormControl();
  flavorList: string[]
  invalidForm: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { id: number },
    private dialogRef: MatDialogRef<LogCoffeeComponent>,
    private coffeeDataService: coffeeDataSerivce) {
  }

  ngOnInit(): void {
    this.getData();
    this.initializeForm();
  }

  private initializeForm() {
    this.logCoffeeForm = new FormGroup({
      'doseIn': new FormControl(null, Validators.required),
      'doseOut': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'flavors': new FormControl(null, Validators.required),
      'rating': new FormControl(null, Validators.required),
    });
  }

  private getData() {
    this.selectedCoffee =
      this.coffeeDataService.coffeeList
        .filter(x => x.id == this.data.id)
        .map(x => ({ brand: x.brand, imagePath: x.imagePath }))[0];

    // TODO make not found notification
    if (!this.selectedCoffee) { this.dialogRef.close(); }
    this.flavorList = this.coffeeDataService.flavorList;
  }

  public onSubmit() {
    console.log(this.logCoffeeForm);
    if (this.logCoffeeForm.invalid) {
      this.invalidForm = true;
      return;
    }

    this.invalidForm = false;
    this.coffeeDataService.addLoggedCoffee(this.mapFormToInterface());
    this.dialogRef.close();
  }

  private mapFormToInterface(): CoffeeRecord{
    return {
      id:9,
      coffeeId: this.data.id,
      doseIn: this.logCoffeeForm.value.doseIn,
      doseOut: this.logCoffeeForm.value.doseOut,
      time: this.logCoffeeForm.value.time,
      flavors: this.logCoffeeForm.value.flavors,
      grind: this.logCoffeeForm.value.grind,
      rating: this.logCoffeeForm.value.rating,
      date: new Date(),
    }
  }
}

interface selectedCoffee {
  brand: string,
  imagePath: string
}
