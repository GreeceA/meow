const http = require('http');

const server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text'}); //content type
	response.end('C'); 
}).listen(3000);

//To run, in Command Prompt, entered node ./downloads/sysdev_ancog_application.js
