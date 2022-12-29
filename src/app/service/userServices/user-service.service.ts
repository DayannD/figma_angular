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
    console.log(`${this.urlApi}/user?email=${email}`);
    return this.httpClient.get<User>(`${this.urlApi}/user?email=${email}`);
  }

  public getOneById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.urlApi}/user/${id}`);
  }
}
