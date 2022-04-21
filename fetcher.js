//node app fetcher.js
//takes 3 CL args: a URL and a local file path
//downloads the resource at the URL to the local path on your machine.
//upon completion, prints a message
//eg: 'Downloaded and saved 1235 bytes to ./index.html

//re file size: 1 character is equal to 1 byte

//EXAMPLE:
//> node fetcher.js http://www.example.edu/ ./index.html
//Downloaded and saved 3261 bytes to ./index.html

//ASYNC OPS - use nested callbacks for this
//http request - wait for response
//write received data to a file in local filesystem

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const location = process.argv[3];
let size;

request(url, (error, response, body) => {
  if (error) {
    console.log("Error message: ", error, response && response.statusCode);
    return;
  }
  let data = body;
  size = data.length;

  fs.writeFile(location, data, err => {
   if (err) {
     console.log(err)
     return
   }
    console.log(`Downloaded and saved ${size} bytes to ${location}.`)
  });

});

///this works!
//took 30mins. Can work on it for another 30mins
//try to add stretch - ERROR HANDLING etc