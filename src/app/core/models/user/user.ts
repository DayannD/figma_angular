import { Message } from "../message/message";

export class User {
  constructor(
    public id: number,
    public image: string = '',
    public name: string = '',
    public email: string = '',
    public password: string = '',
    public messageRecu: Message[],
    public messageSend: Message[],
  ) {}
}
