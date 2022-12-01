import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
  @Input() type!: string;
  @Input() label!: string;
  @Output() outputEmitter:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitOutput(value:string){
    this.outputEmitter.emit(value);
  }

}
