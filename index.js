const fs = require("fs");
const logcon = require("logcon");
const axios = require("axios");

let downloadeddata = "";

function scrape(res) {
  downloadeddata = res.body

  fs.writeFile('2pac.txt', lyrics, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
  });
}

axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => scrape(res)).catch(err => logcon.error(err))
