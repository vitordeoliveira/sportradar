export type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
};

export type InMemoryDatabase = Record<string, Match>;
