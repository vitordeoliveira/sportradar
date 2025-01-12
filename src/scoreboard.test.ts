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

  describe("create match", () => {
    it("Should Scoreboard new match initiate with 0 - 0 receiving home and away team as parameters", () => {
      const db: InMemoryDatabase = {};
      const scoreboard = new Scoreboard(db);

      let game: Match = scoreboard.addMatch("Team home", "Team away");

      const id = `Team home-Team away-0`;
      let match: Match = {
        id,
        homeTeam: "Team home",
        awayTeam: "Team away",
        homeScore: 0,
        awayScore: 0,
        finished: false,
        createdAt: 0,
      };
      expect(game).toEqual(match);
      expect(db[match.id]).toEqual(match);
    });

    it("should create multiple matches", () => {
      const db: InMemoryDatabase = {};
      const scoreboard = new Scoreboard(db);

      let game1: Match = scoreboard.addMatch("Team home", "Team away");
      let game2: Match = scoreboard.addMatch("Team home1", "Team away1");

      const gameId1 = `Team home-Team away-0`;

      let match1 = {
        id: gameId1,
        homeTeam: "Team home",
        awayTeam: "Team away",
        homeScore: 0,
        awayScore: 0,
        finished: false,
        createdAt: 0,
      };

      const gameId2 = `Team home1-Team away1-0`;
      let match2 = {
        id: gameId2,
        homeTeam: "Team home1",
        awayTeam: "Team away1",
        homeScore: 0,
        awayScore: 0,
        finished: false,
        createdAt: 0,
      };
      expect(game1).toEqual(match1);
      expect(game2).toEqual(match2);
      expect(db[gameId1]).toEqual(match1);
      expect(db[gameId2]).toEqual(match2);
    });
  });
  describe("update match", () => {
    it("Should update score receive a pair of absolute scores", () => {
      const matchId = `Team home-Team away-0`;
      let match: Match = {
        id: matchId,
        homeTeam: "Team home",
        awayTeam: "Team away",
        homeScore: 0,
        awayScore: 0,
        finished: false,
        createdAt: 0,
      };

      const db: InMemoryDatabase = {
        [matchId]: match,
      };

      const scoreboard = new Scoreboard(db);

      let currentMatch = scoreboard.updateMatch(matchId, { home: 0, away: 1 });

      expect(currentMatch).toEqual({ ...match, awayScore: 1 });
    });

    it("should return error in match id does not exist", () => {
      const db: InMemoryDatabase = {};

      const scoreboard = new Scoreboard(db);

      expect(() =>
        scoreboard.updateMatch("non_existent_match", {
          home: 0,
          away: 1,
        }),
      ).toThrow("match dont exist");
    });

    it("should return a copy of database object and not a reference", () => {
      const matchId = `Team home-Team away-0`;
      let match: Match = {
        id: matchId,
        homeTeam: "Team home",
        awayTeam: "Team away",
        homeScore: 0,
        awayScore: 0,
        finished: false,
        createdAt: 0,
      };

      const db: InMemoryDatabase = {
        [matchId]: match,
      };

      const scoreboard = new Scoreboard(db);

      let currentMatch = scoreboard.updateMatch(matchId, { home: 0, away: 1 });
      expect(currentMatch).toEqual({ ...match, awayScore: 1 });
      currentMatch.awayScore = 2;

      expect(db[matchId]).toEqual({ ...match, awayScore: 1 });
    });
  });

  describe("finish match", () => {
    it("Should finish the match remove match from scoreboard", () => {
      const matchId = `Team home-Team away-0`;
      let match: Match = {
        id: matchId,
        homeTeam: "Team home",
        awayTeam: "Team away",
        homeScore: 0,
        awayScore: 0,
        finished: false,
        createdAt: 0,
      };

      const db: InMemoryDatabase = {
        [matchId]: match,
      };

      const scoreboard = new Scoreboard(db);
      scoreboard.finishMatch(matchId);

      expect(db[matchId].finished).toBeTruthy();
    });

    it("should return error in match id does not exist", () => {
      const db: InMemoryDatabase = {};

      const scoreboard = new Scoreboard(db);

      expect(() => scoreboard.finishMatch("non_existent_match")).toThrow(
        "match dont exist",
      );
    });
  });

  describe("Scoreboard retrieve matches", () => {
    let db: InMemoryDatabase = {};
    beforeEach(() => {
      const match1: Match = {
        id: "1",
        homeTeam: "Mexico",
        awayTeam: "Canada",
        homeScore: 0,
        awayScore: 5,
        finished: false,
        createdAt: 0,
      };

      const match2: Match = {
        id: "2",
        homeTeam: "Spain",
        awayTeam: "Brazil",
        homeScore: 10,
        awayScore: 2,
        finished: false,
        createdAt: 1,
      };

      const match3: Match = {
        id: "3",
        homeTeam: "Germany",
        awayTeam: "France",
        homeScore: 2,
        awayScore: 2,
        finished: false,
        createdAt: 2,
      };

      const match4: Match = {
        id: "4",
        homeTeam: "Uruguay",
        awayTeam: "Italy",
        homeScore: 6,
        awayScore: 6,
        finished: false,
        createdAt: 3,
      };

      const match5: Match = {
        id: "5",
        homeTeam: "Argentina",
        awayTeam: "Australia",
        homeScore: 3,
        awayScore: 1,
        finished: false,
        createdAt: 4,
      };

      db[match1.id] = match1;
      db[match2.id] = match2;
      db[match3.id] = match3;
      db[match4.id] = match4;
      db[match5.id] = match5;
    });

    afterEach(() => {
      db = {};
    });

    it("Should ordered by the most recently started match when total score is the same", () => {
      const scoreboard = new Scoreboard(db);

      expect(scoreboard.summary()).toContain(`1. Uruguay 6 - Italy 6
2. Spain 10 - Brazil 2
3. Mexico 0 - Canada 5
4. Argentina 3 - Australia 1
5. Germany 2 - France 2`);
    });
  });
});
