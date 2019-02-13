// Package Requirements
const fs = require("fs");
const rp = require('request-promise');
const cheerio = require('cheerio');
const json2csv = require('json2csv');

// Website Entry url
url = "http://shirts4mike.com/";
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

let formatToday = `${year}-${month}-${day}`;
console.log(formatToday);

// Data file conditional/creation

// Requesting Data and arraging html elements

// Function to display scraped info

// Function to create csv file
// const json2csv = require('json2csv').parse;
// const fields = ['field1', 'field2', 'field3'];
// const opts = { fields };
//
// try {
//   const csv = json2csv(myData, opts);
//   console.log(csv);
// } catch (err) {
//   console.error(err);
// }
// Error Log handler

//
