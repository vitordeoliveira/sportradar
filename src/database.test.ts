import { Match, InMemoryDatabase } from "./database";

describe("Match and InMemoryDatabase Types", () => {
  it("should allow creating a valid Match object", () => {
    const match: Match = {
      id: "1",
      homeTeam: "Team A",
      awayTeam: "Team B",
      homeScore: 2,
      awayScore: 1,
    };

    expect(match.id).toBe("1");
    expect(match.homeTeam).toBe("Team A");
    expect(match.awayTeam).toBe("Team B");
    expect(match.homeScore).toBe(2);
    expect(match.awayScore).toBe(1);
  });

  it("should allow creating a valid InMemoryDatabase and adding matches", () => {
    const db: InMemoryDatabase = {};

    const match1: Match = {
      id: "1",
      homeTeam: "Team A",
      awayTeam: "Team B",
      homeScore: 0,
      awayScore: 0,
    };

    const match2: Match = {
      id: "2",
      homeTeam: "Team C",
      awayTeam: "Team D",
      homeScore: 3,
      awayScore: 2,
    };

    db[match1.id] = match1;
    db[match2.id] = match2;

    expect(Object.keys(db).length).toBe(2);
    expect(db["1"]).toEqual(match1);
    expect(db["2"]).toEqual(match2);
  });
});
