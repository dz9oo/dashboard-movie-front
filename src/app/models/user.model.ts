export class UserModel {
  id?: number;
  email: string = "";
  password: string = "";
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
