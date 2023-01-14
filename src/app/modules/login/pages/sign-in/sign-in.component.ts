import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Auth } from 'src/app/core/models/auth/auth';
import { User } from 'src/app/core/models/user/user';
import { AuthService } from 'src/app/service/authService/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  submitted: boolean = false;
  public auth: Auth = new Auth();
  emailForm!: FormGroup;
  isLog!: Promise<boolean>;
  myusername: string = '';
  user!: User;
  errorMessage!: string;

  constructor(
    private readonly authService: AuthService,
    private readonly route: Router
  ) {
    this.emailForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  get password() {
    return this.emailForm.get('password');
  }

  get validator() {
    return true;
  }

  get email() {
    return this.emailForm.get('email');
  }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.submitted = true;
    if (!f.valid) return;

    this.authService
      .auth(f.value.email, f.value.password)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'Email ou mot de passe invalid';
          return throwError(error);
        })
      )
      .subscribe();
  }
}
