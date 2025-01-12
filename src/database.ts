export type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  finished: boolean;
  createdAt: number;
};

export type InMemoryDatabase = Record<string, Match>;
