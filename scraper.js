// Package Requirements
const fs = require("fs");
const rp = require('request-promise');
const cheerio = require('cheerio');
const json2csv = require('json2csv');

// Website Entry url
urlMain = "http://shirts4mike.com/";

// Date Format Programming
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();

if (month < 10) {
  month = `0${month}`;
}
if (day < 10) {
  day = `0${day}`;
}

let csvToday = `${year}-${month}-${day}`;
// Gets the current time in a local, readable, format
let currentTime = date.toLocaleTimeString();
console.log(date);
console.log(csvToday);
console.log(currentTime);

// Data file conditional/creation

let dataFolder = './data';

try {
  fs.accessSync(dataFolder);
} catch (e) {
  fs.mkdirSync(dataFolder);
}

let shirtData = [];

// Requesting Data from main Website
rp(urlMain)
  .then(function (html) {
    const $ = cheerio.load(html);
    // With Cheerio locating the shirts page navigation link
    const shirtsPage = $("a[href*='shirts.php']");

    rp(shirtsPage)
      .then(function (html){
        const $ = cheerio.load(html);
        const products = $(.products li a);
        products.each( (index, elem => {
          let shirtURL = $(elem).attr('href');

          rp(shirtURL)
          // Function to display scraped info

          // Function to create csv file
          const json2csv = require('json2csv').parse;
          const fields = ['Title', 'Price', 'ImageURL', 'URL', 'Time'];
          const opts = { fields };

          try {
            const csv = json2csv(shirtData, opts);
            fs.writeFile(`./data/${csvToday}.csv`, csv, (err) => {


              console.log("Website Sucessfully Crawled!");
            });
          } catch (err) {
            console.error(err);
          }


    })
  })
})
  .catch(function (err) {
  // Error Log handler
    fs.appendFile("scraper-error.log", `[${date}] ${error}\n`, (error) => {
      if (error) {
        throw error;
      }
});
