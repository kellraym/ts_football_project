"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
console.log(reader.data);
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    const home = match[1];
    const away = match[2];
    const winner = match[5];
    if ((home === "Man United" && winner === MatchResult.HomeWin) ||
        (away === "Man United" && winner === MatchResult.AwayWin))
        manUnitedWins++;
}
console.log(`Man united won ${manUnitedWins} games`);
