import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user/user';
import { UserService } from 'src/app/service/userServices/user-service.service';

@Component({
  selector: 'app-discution',
  templateUrl: './discution.component.html',
  styleUrls: ['./discution.component.scss']
})


export class DiscutionComponent implements OnInit {
  user$!: Observable<User>;
  user!: number;

  constructor(private userServ: UserService) {
    this.user$ = this.userServ.getOneById(1);
   }

  ngOnInit(): void {
  }

}
