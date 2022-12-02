import { Component,EventEmitter,Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() css!: string;
  @Input() name!: string;
  @Input() id!: string;
  @Output() clickEmitter: EventEmitter<any|null> = new EventEmitter<any|null>();

  constructor() { }

  ngOnInit(): void {
  }

}
