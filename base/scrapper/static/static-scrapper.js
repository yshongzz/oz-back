const CRAWL_URL =
  "https://search.naver.com/search.naver?query=%EC%BB%A4%ED%94%BC&ackey=l06ptp6f";
import axios from "axios";
import { Cheerio } from "cheerio";

function crawl() {
  console.log("crawl");
}

const StaticScrapper = {
  crawl: crawl,
};

export default StaticScrapper;
