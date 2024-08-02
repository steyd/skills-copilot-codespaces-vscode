// Create web server
// Run: node comments.js
// Access in browser: http://localhost:8080/

// Load modules
var http = require('http');
var url = require('url');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
  // Get the URL
  var url_parts = url.parse(req.url);
  console.log(url_parts);

  if (url_parts.pathname == '/') {
    // Read the file
    fs.readFile('./comments.html', function(err, data) {
      res.end(data);
    });
  } else if (url_parts.pathname == '/post') {
    // Get the comment
    var comment = url_parts.query.split('=')[1];
    console.log(comment);

    // Append the comment to the file
    fs.appendFile('comments.html', comment + '<br>', function(err) {
      if (err) {
        console.log(err);
      }
    });

    // Read the file
    fs.readFile('./comments.html', function(err, data) {
      res.end(data);
    });
  }
}).listen(8080);

console.log('Server running at http://localhost:8080/');