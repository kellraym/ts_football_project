"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map((row) => row.split(","));
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let manUnitedWins = 0;
for (let match of matches) {
    const home = match[1];
    const away = match[2];
    const winner = match[5];
    if ((home === "Man United" && winner === MatchResult.HomeWin) ||
        (away === "Man United" && winner === MatchResult.AwayWin))
        manUnitedWins++;
}
console.log(`Man united won ${manUnitedWins} games`);
console.log("small change");
