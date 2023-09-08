import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();

console.log(reader.data);

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

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
