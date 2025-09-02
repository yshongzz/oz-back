import fs from "fs";
import path from "path";

const Log_dig = "./log";

function makeResultsDir() {
  fs.mkdirSync(Log_dig);
}

function makeTxtFile(fileName, content, isDateName = false) {
  try {
    if (!fs.existsSync(Log_dig)) {
      makeResultsDir();
    }
    if (isDateName) {
      fileName = new Date().toISOString().split("T")[0] + "_" + fileName;
    }
    const filePath = path.join(Log_dig, fileName);
    if (fs.existsSync(filePath)) {
      fs.appendFileSync(filePath, content);
    } else {
      fs.writeFileSync(filePath, content);
    }
  } catch (error) {
    console.error(error);
  }
}

function readTxtFile(fileName) {
  const filePath = path.join(Log_dig, fileName);
  const content = fs.readFileSync(filePath, "utf8");
  console.log(content);
}

const LogMessage = {
  makeTxtFile,
  readTxtFile,
};

export default LogMessage;
