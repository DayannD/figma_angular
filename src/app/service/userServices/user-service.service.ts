import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlApi: string;
  private user$!: Observable<User>;

  public collections$: BehaviorSubject<User[]>;
  public status!: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.urlApi = environment.urlApi;
    this.collections$ = new BehaviorSubject<User[]>([]);
    // this.refreshCollection()
  }

  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.urlApi}/user`);
  }

  public getOne(email: string): Observable<User> {
    this.user$ = this.httpClient.get<User>(
      `${this.urlApi}/user?email=${email}`
    );
    this.user$.subscribe((user) => {
      console.log(user);
    });

    return this.httpClient.get<User>(`${this.urlApi}/user?email=${email}`);
  }

  public getOneById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.urlApi}/user/${id}`);
  }
}
