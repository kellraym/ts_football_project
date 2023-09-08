import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (let match of matches) {
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
console.log("small change");
