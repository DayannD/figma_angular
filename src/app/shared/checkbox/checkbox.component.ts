import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CheckboxComponent implements OnInit {
  @Input() model!: any;
  @Input() name!: string;
  @Output() checkBoxEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {

  }
}
