import fs from "fs";
const RESULTS_DIR = "./results";

function makeResultsDir() {
  fs.mkdirSync(RESULTS_DIR);
}
