import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public item: String[];

  constructor(private router:Router) {
    this.item = ["dashboard","activity","ebooks","settings","messenger","files"];
   }

  ngOnInit(): void {
  }

  public navTo(url:String):void {
    this.router.navigate([url]);
  }

}
