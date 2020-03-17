export class ActorModel {
  id?: number;
  movieId: number;
  actorId: number;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
