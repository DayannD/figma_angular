import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user/user';
import { UserService } from 'src/app/service/userServices/user-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  user$ !: Observable<User>;
  message!: string;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getOneById(1);
    this.user$.subscribe((user) =>
    {
      console.log(user);
    }
    );
  }

}
