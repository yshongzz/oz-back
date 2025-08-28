import fs from "fs";

function tsetFs() {
  console.log("fs START");
  fs.writeFileSync("test.txt", "Hello World");
  const data = fs.readFileSync("test.txt", "utf8");
  console.log("test.txt", data);
  console.log("fs END");
}

export default tsetFs;
