import { InMemoryDatabase, Match } from "./database";
import { Scoreboard } from "./scoreboard";

describe("Scoreboard", () => {
  it("Should create Scoreboard class with injected database", () => {
    const db: InMemoryDatabase = {};
    const scoreboard = new Scoreboard(db);
    expect(scoreboard).toBeDefined();
  });
  it("Should Scoreboard new match initiate with 0 - 0 receiving home and away team as parameters", () => {
    const db: InMemoryDatabase = {};
    const scoreboard = new Scoreboard(db);

    let game: Match = scoreboard.addMatch("Team home", "Team away");

    expect(game.awayTeam).toBe(0);
    expect(game.homeTeam).toBe(0);
  });
  it("Should update score receive a pair of absolute scores", () => {});
  it("Should finish the match remove match from scoreboard", () => {});

  describe("Scoreboard retrieve matches", () => {
    it("Should retrieve ordered by total score", () => {});
    it("Should ordered by the most recently started match when total score is the same", () => {});
  });
});
