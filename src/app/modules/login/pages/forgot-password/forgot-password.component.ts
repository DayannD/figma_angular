import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auth } from 'src/app/core/models/auth';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public auth: Auth = new Auth();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    console.log(this.auth);
    console.log(f.value); // { first: '', last: '' }
  }

}
