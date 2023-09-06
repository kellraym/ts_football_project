import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));

let manUnitedWins = 0;

for (let match of matches) {
  const home = match[1];
  const away = match[2];
  const winner = match[5];

  if (
    (home === "Man United" && winner === "H") ||
    (away === "Man United" && winner === "A")
  )
    manUnitedWins++;
}

console.log(` Man united won ${manUnitedWins} games`);
