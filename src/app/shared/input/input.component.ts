import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {}
}
