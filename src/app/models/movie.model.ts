export class MovieModel {
  id?: number;
  email: string;
  password: string;
  title: string;
  description: string;
  year: number;
  picture: string;
  score: number;
  duration: number;
  genreId: number;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
