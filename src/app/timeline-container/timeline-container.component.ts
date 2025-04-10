import { Component } from '@angular/core';
import { TimelineComponent } from "../timeline/timeline.component";
import { TripFormComponent } from "../trip-form/trip-form.component";

@Component({
  selector: 'app-timeline-container',
  imports: [TimelineComponent, TripFormComponent],
  templateUrl: './timeline-container.component.html',
  styleUrl: './timeline-container.component.css'
})
export class TimelineContainerComponent {

}
