import { User } from "../user/user";

export class Message {
  constructor(
    public id: number,
    public message:string,
    public creatAt: Date,
    public from: User,
    public to: User,
    public read: boolean,
  ){}
}
