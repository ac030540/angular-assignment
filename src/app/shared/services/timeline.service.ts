import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  timeline: Trip[] = [];

  addTrip(tripToAdd: Trip) {
    if(this.timeline.length) {
      const previousTrip = this.timeline[this.timeline.length - 1];

      if(previousTrip.start === tripToAdd.start && previousTrip.end === tripToAdd.end) {
        // consecutive trips being the same
        previousTrip.level = 2;
        tripToAdd.level = 2;
      } else if (previousTrip.end !== tripToAdd.start) {
        // discontinued trips
        tripToAdd.connectedWithArrow = true;
      }
    }

    this.timeline.push(tripToAdd);
  }
}
