import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/core/models/auth/auth';
import { User } from 'src/app/core/models/user/user';
import { AuthService } from 'src/app/service/authService/auth-service.service';
import { TokenService } from 'src/app/service/tokenService/token-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  submitted: boolean = false;
  public auth: Auth = new Auth();
  user$!: Observable<User>;
  emailForm!: FormGroup;
  isLog!: Promise<boolean>;
  myusername: string = '';
  user!: User;
  emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(
    private authService: AuthService,
    private route: Router,
    private tokenService: TokenService
  ) {
    this.emailForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
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

    this.authService.auth(f.value.email, f.value.password);

    if (!this.authService.getIsConnected) return;

    this.route.navigate(['/dashboard']);
  }
}
