import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  //étend la view du parent, pour que le parent détecte le ngModel de l'enfant
})

export class InputComponent implements OnInit {
  @Input() type!: string;
  @Input() label!: string;
  @Input() css!: string;
  @Input() name!: string;
  @Input() cssLabel!: string;
  @Input() model!: any;

  mySubscription!: Subscription;

  constructor() {
  }

  ngOnInit(): void {}

  public change(){
    if(this.type === "password"){
      this.type = "text";
      this.mySubscription= interval(30).subscribe((x =>{
        console.log(interval);
        if(x == 30){
          this.setType();
        }
    }));
    this.mySubscription.unsubscribe;
    }else{
      this.type = "password";
    }
  }

  public setType(){
    this.type = "password";
  }
}
