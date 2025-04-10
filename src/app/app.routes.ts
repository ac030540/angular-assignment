import { Routes } from '@angular/router';
import { TimelineContainerComponent } from './timeline-container/timeline-container.component';

export const routes: Routes = [
  {path: '**', component: TimelineContainerComponent},
];
