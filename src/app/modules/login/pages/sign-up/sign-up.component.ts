import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from 'src/app/core/models/auth';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  public auth: Auth = new Auth();
  emailForm!: FormGroup;

  private passwordRegex =
  '?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['',[
        Validators.email,
        Validators.minLength(4),
        Validators.required
      ]],
      password:['',[
       //   Validators.pattern(this.passwordRegex),
          Validators.required
      ]],
      samePassword:['',[
   //     Validators.pattern(this.passwordRegex),
        Validators.required
      ]]});
  }

  get email(){
    return this.emailForm.get('email');
  }

  get password(){
    return this.emailForm.get('password');
  }

  get samePassword(){
    console.log(this.samePassword)
    return this.emailForm.get('samePassword');
  }

  set email(data:any){
    this.emailForm.get('email')?.setValue(data);
  }

  set password(data){
    this.emailForm.get('email')?.setValue(data);
  }

  set samePassword(data){
    this.emailForm.get('email')?.setValue(data);
  }

  onSubmit(){
    console.log(this.emailForm);
  }

  eventEmitter(event:Event){

  }

}
