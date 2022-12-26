import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user/user';
import { UserService } from '../userServices/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$!: Observable<User>;
  user !: User;

  constructor(private userService:UserService) { }

  public auth(email: string, password: string): Observable<User>{
      console.log(this.user$ = this.userService.getOne(email))
      this.user$ = this.userService.getOne(email);

      return this.user$;
  }

}
