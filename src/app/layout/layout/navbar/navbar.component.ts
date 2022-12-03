import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public item: String[];
  public page!: String;

  constructor(private router:Router) {
    this.item = ["dashboard","activity","ebooks","settings","messenger","files"];
   }

  ngOnInit(): void {
    this.page = this.router.url;
    if(this.page == "/"){
      this.page = "dashboard"
    }
  }

  public navTo(url:String):void {
    this.page = url;
    this.router.navigate([url]);
  }

}
