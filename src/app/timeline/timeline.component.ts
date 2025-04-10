import { Component, inject } from '@angular/core';
import { TimelineService } from '../shared/services/timeline.service';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [NgStyle],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  timelineService = inject(TimelineService);

  getBorderStyle(idx: number): { [key: string]: string } {
    const colour = this.timelineService.timeline[idx - 1]?.colour;
    return {
      'border-left': `8px solid ${colour}`
    };
  }
}
