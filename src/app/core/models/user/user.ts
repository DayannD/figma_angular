import { Message } from "../message/message";

export class User {
  public id: number;
  public image: string = '';
  public name: string = '';
  public email: string = '';
  public password: string = '';
  public messageRecu: Message[];
  public messageSend: Message[];
  constructor(
    id: number,
    image: string,
    name: string,
    email: string,
    password: string,
    messageRecu: Message[],
    messageSend: Message[],
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.email = email;
    this.password = password;
    this.messageRecu = messageRecu;
    this.messageSend = messageSend;
  }
}
