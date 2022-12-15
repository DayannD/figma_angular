import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-with-out-ng-form',
  templateUrl: './input-with-out-ng-form.component.html',
  styleUrls: ['./input-with-out-ng-form.component.scss']
})
export class InputWithOutNgFormComponent implements OnInit {

  @Input() type!: string;
  @Input() label!: string;
  @Input() css!: string;
  @Input() name!: string;
  @Input() cssLabel!: string;
  @Output() value: EventEmitter<any> = new EventEmitter<any>();

  public isPassword!:boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isPassword = this.type  == "password" ? true : false;
  }

  ngOnChange(): void{
    console.log(this.value);
  }

  public change(){
    if(this.type === "password"){
      this.type = "text";
    }else{
      this.type = "password";
    }
  }

}
