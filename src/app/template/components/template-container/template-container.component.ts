import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent implements OnInit {
  @Input() public title !: String;

  constructor() { }

  ngOnInit(): void {
  }

}
