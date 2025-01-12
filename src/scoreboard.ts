import { InMemoryDatabase } from "./database";

export class Scoreboard {
  private db: InMemoryDatabase;

  constructor(db: InMemoryDatabase) {
    this.db = db;
  }
}
