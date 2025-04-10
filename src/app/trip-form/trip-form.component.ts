import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TripFormFields, TripFormLabels, TripFormModel } from '../forms/trip-form';
import { InputTextComponent } from '../input-text/input-text.component';
import { locationTransformer } from '../forms/transformers';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-trip-form',
  imports: [ReactiveFormsModule, InputTextComponent, ButtonComponent],
  templateUrl: './trip-form.component.html',
  styleUrl: './trip-form.component.css'
})
export class TripFormComponent implements OnInit{
  tripFormFields = TripFormFields;
  tripFormLabels = TripFormLabels;
  tripForm = new FormGroup<TripFormModel>({
    [TripFormFields.START]: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    [TripFormFields.END]: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
  })

  ngOnInit(): void {
    this.setTransformer(TripFormFields.START);
    this.setTransformer(TripFormFields.END);
  }

  setTransformer(controlName: string) {
    const control = this.tripForm.get(controlName);

    control?.valueChanges.subscribe(value => {
      const transformedValue = locationTransformer(value);

      if (value !== transformedValue) {
        control.setValue(transformedValue, { emitEvent: false });
      }
    });
  }
}
