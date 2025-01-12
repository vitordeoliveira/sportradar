import { Scoreboard } from "./scoreboard";
import { InMemoryDatabase } from "./database";

const db: InMemoryDatabase = {};
const scoreboard = new Scoreboard(db);

let match1 = scoreboard.addMatch("Brazil", "Germany");
let match2 = scoreboard.addMatch("France", "Uruguay");

console.log(
  "------------------------\n  summary\n------------------------\n" +
    scoreboard.summary() +
    "\n------------------------\n",
);

scoreboard.updateMatch(match1.id, { home: 0, away: 1 });
scoreboard.updateMatch(match2.id, { home: 0, away: 0 });

console.log(
  "------------------------\n  summary\n------------------------\n" +
    scoreboard.summary() +
    "\n------------------------\n",
);

scoreboard.updateMatch(match1.id, { home: 0, away: 1 });
scoreboard.updateMatch(match2.id, { home: 1, away: 0 });

console.log(
  "------------------------\n  summary\n------------------------\n" +
    scoreboard.summary() +
    "\n------------------------\n",
);

let match3 = scoreboard.addMatch("Argentina", "Mexico");

scoreboard.updateMatch(match3.id, { home: 2, away: 0 });
console.log(
  "------------------------\n  summary\n------------------------\n" +
    scoreboard.summary() +
    "\n------------------------\n",
);

scoreboard.finishMatch(match2.id);

console.log(
  "------------------------\n  summary\n------------------------\n" +
    scoreboard.summary() +
    "\n------------------------\n",
);
