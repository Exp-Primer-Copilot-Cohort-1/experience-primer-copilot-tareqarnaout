// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Path: comments.html
// Create comments.html
// Create an HTML file that displays a list of comments. Each comment should be inside a <div> element and should be displayed as a paragraph. The comments should be hard-coded in the HTML file.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comments</title>
</head>
<body>
  <div>
    <p>This is a comment.</p>
  </div>
  <div>
    <p>This is another comment.</p>
  </div>
</body>
</html>