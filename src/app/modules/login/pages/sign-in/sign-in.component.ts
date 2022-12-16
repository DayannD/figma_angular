import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, NgModel } from '@angular/forms';
import { Auth } from 'src/app/core/models/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  submitted:boolean = false;
  public auth: Auth = new Auth();
  emailForm!: FormGroup;

  myusername: string = '';
  emailRegex =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor() {
    this.emailForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      }),
      password: new FormControl('', {
        validators: [Validators.required],
      })
    });
  }

  get password() {
    return this.emailForm.get('password');
  }

  get validator() {
    return true;
  }

  get email(){
    return this.emailForm.get('email');
  }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.submitted = true;
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
