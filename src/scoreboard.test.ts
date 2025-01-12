import { InMemoryDatabase, Match } from "./database";
import { Scoreboard } from "./scoreboard";

describe("Scoreboard", () => {
  beforeAll(() => {
    const mockTimestamp = 0;
    jest.spyOn(Date, "now").mockImplementation(() => mockTimestamp);
  });

  it("Should create Scoreboard class with injected database", () => {
    const db: InMemoryDatabase = {};
    const scoreboard = new Scoreboard(db);
    expect(scoreboard).toBeDefined();
  });
  it("Should Scoreboard new match initiate with 0 - 0 receiving home and away team as parameters", () => {
    const db: InMemoryDatabase = {};
    const scoreboard = new Scoreboard(db);

    let game: Match = scoreboard.addMatch("Team home", "Team away");

    const id = `Team home-Team away-0`;
    let match = {
      id,
      homeTeam: "Team home",
      awayTeam: "Team away",
      homeScore: 0,
      awayScore: 0,
      finished: false,
    };
    expect(game).toEqual(match);
  });

  it("Should update score receive a pair of absolute scores", () => {
    const matchId = `Team home-Team away-0`;
    let match = {
      id: matchId,
      homeTeam: "Team home",
      awayTeam: "Team away",
      homeScore: 0,
      awayScore: 0,
      finished: false,
    };

    const db: InMemoryDatabase = {
      [matchId]: match,
    };

    const scoreboard = new Scoreboard(db);

    let currentMatch = scoreboard.updateMatch(matchId, { home: 0, away: 1 });
    expect(currentMatch).toEqual({ ...match, awayScore: 1 });
  });

  it("Should finish the match remove match from scoreboard", () => {});

  describe("Scoreboard retrieve matches", () => {
    it("Should retrieve ordered by total score", () => {});
    it("Should ordered by the most recently started match when total score is the same", () => {});
  });
});
