import StaticScrapper from "./scrapper/static/static-scrapper.js";
import DynamicScrapper from "./scrapper/dynamic/dynamic-scrapper.js";

StaticScrapper.crawl();
DynamicScrapper.crawl();

// import hello from "./hello/hello.js";
// import testFS from "./hello/fs.js";
// import LogMessage from "./hello/logMessage.js";

// hello();
// testFS();

// TxtManager.makeTxtFile("test.txt", "Hello World1", true);
// TxtManager.readTxtFile("test.txt");

// TxtManager.makeTxtFile("test.txt", "Hello World1", true);
// LogMessage.makeTxtFile("log.txt", "\n\nNice meet you2\n\n", true);
// console.log("index.js END");
