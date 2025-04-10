import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({ required: true }) text!: string;
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Output() handleClick: EventEmitter<void> = new EventEmitter();
}
