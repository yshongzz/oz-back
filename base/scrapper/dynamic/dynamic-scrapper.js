import puppeteer from "puppeteer";
const CRAWL_URL =
  "https://search.naver.com/search.naver?query=%EC%BB%A4%ED%94%BC&ackey=l06ptp6f";
function crawl() {
  console.log("crawl");
}

const DynamicScrapper = {
  crawl: crawl,
};

export default DynamicScrapper;
