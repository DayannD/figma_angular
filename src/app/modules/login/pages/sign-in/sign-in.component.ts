import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auth } from 'src/app/core/models/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public auth: Auth = new Auth();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    console.log(this.auth);
    console.log(f.value); // { first: '', last: '' }
  }

  // emailListener(email:any){
  //   this.email=email;
  // }

  // passwordListener(password:any){
  //   this.password=password;
  // }
}
