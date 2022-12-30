import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user/user';
import { environment } from 'src/environments/environment';
import { TokenService } from '../tokenService/token-service.service';
import { UserService } from '../userServices/user-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: Observable<User>;
  user!: User;
  isConnected: boolean = false;
  urlApi: string;

  constructor(
    private userService: UserService,
    private token: TokenService,
    private httpClient: HttpClient
  ) {
    this.urlApi = environment.urlApi;
    this.isConnected = !!this.token.isLogged();
  }

  public auth(email: string, password: string) {
    this.httpClient
      .get<User>(`${this.urlApi}/user?email=${email}&password=${password}`)
      .subscribe((Response) => {
        this.token.saveToken('token');
        this.isConnected = true;
      });
  }

  getIsConnected(): boolean {
    return this.isConnected;
  }

  logout() {
    this.isConnected = false;
    this.token.clearToken();
  }

  public connect(): boolean {
    return true;
  }
}
