import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/core/models/message/message';
import { User } from 'src/app/core/models/user/user';
import { UserService } from 'src/app/service/userServices/user-service.service';

@Component({
  selector: 'app-discution',
  templateUrl: './discution.component.html',
  styleUrls: ['./discution.component.scss'],
})
export class DiscutionComponent implements OnInit {
  user$!: Observable<User>;
  message!: Message[];
  user!: number;
  fromUser!: any;

  constructor(private userServ: UserService) {
    this.user$ = this.userServ.getOneById(1);
    this.message = [];
  }

  ngOnInit(): void {
    this.user$.subscribe((data: User) => {
      data.messageRecu.forEach((message: Message) => {
        if (message.from.id === this.fromUser) {
          this.message.push(message);
        }
      });
    });
  }

  setIdFrom(event: Event) {
    console.log(event);
    this.fromUser = event;
  }
}
