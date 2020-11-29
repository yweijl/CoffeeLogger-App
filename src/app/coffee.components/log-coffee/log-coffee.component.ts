import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataSerivce } from 'src/app/services/data.service';
import { DetailedCoffeeDto, INewRecordDto, NewRecordDto, RecordClient } from 'src/app/http.clients/api.client';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-log-coffee',
  templateUrl: './log-coffee.component.html',
  styleUrls: ['./log-coffee.component.scss'],
  providers: [RecordClient]
})
export class LogCoffeeComponent implements OnInit {
  logCoffeeForm: FormGroup;
  selectedCoffee: selectedCoffee
  brand: string;
  imagePath: string;
  flavorList: string[]
  invalidForm: boolean = false;

  constructor(
    private store: Store<{coffee: {detailedCoffees: DetailedCoffeeDto[]}}>,
    private recordClient:RecordClient,
    @Inject(MAT_DIALOG_DATA) private data: { id: number },
    private dialogRef: MatDialogRef<LogCoffeeComponent>,
    private dataService: DataSerivce) {
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
    this.store.select('coffee').subscribe(
      response => {
      this.selectedCoffee =
      response.detailedCoffees
        .filter(x => x.id == this.data.id)
        .map(x => ({ brandName: x.brandName, imageUri: x.imageUri }))[0];
    })

    // TODO make not found notification
    if (!this.selectedCoffee) { this.dialogRef.close(); }
    this.flavorList = this.dataService.flavorList;
  }

  public onSubmit() {
    console.log(this.logCoffeeForm);
    if (this.logCoffeeForm.invalid) {
      this.invalidForm = true;
      return;
    }

    this.invalidForm = false;
    this.recordClient.post(this.createNewRecordObject())
    .subscribe(response => {
      console.log(response)
    });
    


    this.dialogRef.close();
  }

  private createNewRecordObject(): NewRecordDto{
    const record: INewRecordDto = {
      coffeeId: this.data.id,
      doseIn: this.logCoffeeForm.value.doseIn,
      doseOut: this.logCoffeeForm.value.doseOut,
      time: this.logCoffeeForm.value.time,
      flavors: this.logCoffeeForm.value.flavors,
      rating: this.logCoffeeForm.value.rating,
    }
    return new NewRecordDto(record);
  }
}

interface selectedCoffee {
  brandName?: string,
  imageUri?: string
}
