import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/core/models/auth/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public auth: Auth = new Auth();
  emailForm!: FormGroup;
  submitted: boolean = false;

  private passwordRegex =
    '?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(4)],
      ],
      password: [
        '',
        [
          //   Validators.pattern(this.passwordRegex),
          Validators.required,
        ],
      ],
      samePassword: [
        '',
        [
          //     Validators.pattern(this.passwordRegex),
          Validators.required,
        ],
      ],
      telephones: this.formBuilder.array([]),
      terms: [
        '',
        [
          //     Validators.pattern(this.passwordRegex),
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(11),
        ],
      ],
    });

    this.addTelephone();
  }

  get telephones() {
    return this.emailForm.get('telephones') as FormArray;
  }

  get terms() {
    return this.emailForm.get('terms');
  }

  get email() {
    return this.emailForm.get('email');
  }

  get password() {
    console.log(this.password);
    return this.emailForm.get('password');
  }

  get samePassword() {
    console.log(this.samePassword);
    return this.emailForm.get('samePassword');
  }

  get f() {
    return this.emailForm.controls;
  }

  public addTelephone() {
    let telephone = this.formBuilder.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
        ],
      ],
    });
    if (this.telephones.length < 3) this.telephones.push(telephone); // 0 => phone // 1 => ph

    console.log(this.telephones);
  }

  getPhoneNumber(index: number) {
    console.log('salut');
    return this.telephones.controls[index].get('phoneNumber');
  }

  getNumberTelephone(index: number) {
    return this.telephones.controls[index].get('telephone');
  }
  onSubmit() {
    this.submitted = true;

    if (this.emailForm.errors) {
      return;
    }

    console.log(this.emailForm);
  }

  setSamePassword(event: Event) {
    this.emailForm.controls['samePassword'].setValue(event);
  }

  setPassword(event: Event) {
    this.emailForm.controls['password'].setValue(event);
  }

  setEmail(event: Event) {
    this.emailForm.controls['email'].setValue(event);
  }

  setTelephone(event: Event, index: number) {
    this.telephones.controls[index].setValue({ phoneNumber: event });
  }

  remove(index: number) {
    this.telephones.removeAt(index);
  }

  eventEmitter(event: Event) {}
}
