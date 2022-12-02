import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  private email!: any;
  private password!: any;


  constructor() { }

  ngOnInit(): void {
  }

  emailListener(email:any){
    this.email=email;
  }

  passwordListener(password:any){
    this.password=password;
  }

}
