import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
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
