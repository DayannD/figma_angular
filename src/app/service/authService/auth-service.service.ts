import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user/user';
import { TokenService } from '../tokenService/token-service.service';
import { UserService } from '../userServices/user-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: Observable<User>;
  user!: User;
  isConnected: boolean = false;

  constructor(private userService: UserService, private token: TokenService) {}

  public auth(email: string, password: string): void {
    this.user$ = this.userService.getOne(email);
    console.log(this.user$);
    this.user$.subscribe((user) => {
      console.log(user.password);
      if (user.password == password) {
        this.user = user;
      } else {
        console.log('bah non');
      }
    });
    console.log(this.user);
  }

  get userUse() {
    return this.user;
  }

  logout() {
    this.isConnected = false;
    this.token.clearToken;
  }

  public connect(): boolean {
    return true;
  }
}
