const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// the {flag: "a"} here will add to existing text in the file
// Without the flag, it will overwite existing text
writeFileSync(
  "./content/result-sync.txt",
  `The new file : ${first}, ${second}`,
  { flag: "a" }
);
console.log("Done with this task");
console.log("Starting the next one");
