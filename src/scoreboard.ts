import { InMemoryDatabase, Match } from "./database";

export class Scoreboard {
  private db: InMemoryDatabase;

  constructor(db: InMemoryDatabase) {
    this.db = db;
  }

  addMatch(homeTeam: string, awayTeam: string): Match {
    const id = `${homeTeam}-${awayTeam}-${Date.now()}`;
    let match = {
      id,
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
      finished: false,
    };

    this.db[id] = match;
    console.log(`Match started: ${homeTeam} vs ${awayTeam}`);

    return JSON.parse(JSON.stringify(match));
  }

  updateMatch(matchId: string, score: { home: number; away: number }): Match {
    let match = this.db[matchId];
    if (match == undefined) {
      throw new Error("match dont exist");
    }

    this.db[matchId] = {
      ...match,
      homeScore: score.home,
      awayScore: score.away,
    };

    return JSON.parse(JSON.stringify(this.db[matchId]));
  }
}
