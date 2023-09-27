"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
let manUnitedWins = 0;
console.log(reader.data[0][0]);
for (let match of reader.data) {
    const home = match[1];
    const away = match[2];
    const winner = match[5];
    if ((home === "Man United" && winner === MatchResult_1.MatchResult.HomeWin) ||
        (away === "Man United" && winner === MatchResult_1.MatchResult.AwayWin))
        manUnitedWins++;
}
console.log(`Man united won ${manUnitedWins} games`);
