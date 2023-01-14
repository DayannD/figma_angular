import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlApi: string;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient
  ) {
    this.urlApi = environment.urlApi;
  }

  public auth(email: string, password: string): Observable<void | unknown> {
    return this.httpClient
      .post<User>(`${this.urlApi}/user`, { email, password })
      .pipe(
        map((result: User) => {
          this.saveToken('token');
          this.router.navigate(['/dashboard']);
          return;
        }),
        catchError((error: any) => {
          return error;
        })
      );
  }

  public saveToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  public isLogged(): boolean {
    const token = sessionStorage.getItem('token');
    return !!token;
  }

  logout() {
    this.removeToken();
    this.router.navigate(['/']);
  }

  public removeToken(): void {
    sessionStorage.removeItem('token');
  }
}
