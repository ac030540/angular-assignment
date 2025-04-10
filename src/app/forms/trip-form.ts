import { FormControl } from "@angular/forms";

export interface TripFormModel {
  start: FormControl<string>;
  end: FormControl<string>;
}

export enum TripFormLabels {
  START = 'Start Point',
  END = 'End Point'
}

export enum TripFormFields {
  START = 'start',
  END = 'end'
}
