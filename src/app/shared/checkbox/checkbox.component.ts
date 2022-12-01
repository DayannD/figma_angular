import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Output() remember = new EventEmitter<boolean>(false);

  constructor() {

   }

  ngOnInit(): void {
  }

  checkbox(value:boolean){
    console.log(value);
    this.remember.emit(value);
  }
}
