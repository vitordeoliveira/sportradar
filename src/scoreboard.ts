import { InMemoryDatabase, Match } from "./database";

export class Scoreboard {
  private db: InMemoryDatabase;

  constructor(db: InMemoryDatabase) {
    this.db = db;
  }

  addMatch(homeTeam: string, awayTeam: string): Match {
    const id = `${homeTeam}-${awayTeam}-${Date.now()}`;
    let match: Match = {
      id,
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
      finished: false,
      createdAt: Date.now(),
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

  finishMatch(matchId: string): void {
    if (this.db[matchId] == undefined) {
      throw new Error("match dont exist");
    }

    console.log(
      `Finish ${this.db[matchId].homeTeam} X ${this.db[matchId].awayTeam}`,
    );

    this.db[matchId] = {
      ...this.db[matchId],
      finished: true,
    };
  }

  summary(): string {
    return Object.values(this.db)
      .filter((match) => !match.finished)
      .sort((a, b) => {
        const scoreA = a.homeScore + a.awayScore;
        const scoreB = b.homeScore + b.awayScore;

        if (scoreA !== scoreB) {
          return scoreB - scoreA;
        }

        return b.createdAt - a.createdAt;
      })
      .map(
        (match, index) =>
          `${index + 1}. ${match.homeTeam} ${match.homeScore} - ${match.awayTeam} ${match.awayScore}`,
      )
      .join("\n");
  }
}
