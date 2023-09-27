import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

let manUnitedWins = 0;

console.log(reader.data[0][0]);

for (let match of reader.data) {
  const home = match[1];
  const away = match[2];
  const winner = match[5];

  if (
    (home === "Man United" && winner === MatchResult.HomeWin) ||
    (away === "Man United" && winner === MatchResult.AwayWin)
  )
    manUnitedWins++;
}

console.log(`Man united won ${manUnitedWins} games`);
