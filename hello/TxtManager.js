import fs from "fs";
import path from "path";

const RESULTS_DIR = "./results";

function makeResultsDir() {
  fs.mkdirSync(RESULTS_DIR);
}

function makeTxtFile(fileName, content, isDateName = false) {
  try {
    if (!fs.existsSync(RESULTS_DIR)) {
      makeResultsDir();
    }
    if (isDateName) {
      fileName = new Date().toISOString().split("T")[0] + "_" + fileName;
    }
    const filePath = path.join(RESULTS_DIR, fileName);
    if (fs.existsSync(filePath)) {
      // fs.appendFileSync(filePath, content);
      const originContent = fs.readFileSync(filePath, "utf8");
      const newContent = originContent + "\n" + content;
      fs.writeFileSync(filePath, newContent);
    } else {
      fs.writeFileSync(filePath, content);
    }
  } catch (error) {
    console.error(error);
  }
}

function readTxtFile(fileName) {
  const filePath = path.join(RESULTS_DIR, fileName);
  const content = fs.readFileSync(filePath, "utf8");
  console.log(content);
}

const TxtManager = {
  makeTxtFile,
  readTxtFile,
};

export default TxtManager;
