export class ActorModel {
  id?: number;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  nationality: number;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
