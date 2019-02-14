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

// Requesting Data and arraging html elements
rp(urlMain)
    .then(function (htmlString) {
        // Process html...
    })
    .catch(function (err) {
        // Crawling failed...
    });

// Function to display scraped info

// Function to create csv file
const json2csv = require('json2csv').parse;
const fields = ['Title', 'Price', 'ImageURL', 'URL', 'Time'];
const opts = { fields };

try {
  const csv = json2csv(shritvariable, opts);
  fs.writeFile(`./data/${csvToday}.csv`, csv, (err) => {


    console.log("Website Sucessfully Crawled!");
  });
} catch (err) {
  console.error(err);
}
// Error Log handler
fs.appendFile("scraper-error.log", `[${date}] ${error}\n`, (error) => {
  if (error) {
    throw error;
  }
