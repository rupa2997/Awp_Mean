/*const http = require('http');
http.createServer((request, response) => {
    let data = { title: 'cdac', id: 'mumabi' }
    response.end(JSON.stringify(data));

}).listen(5600);*/

const http = require('http');

http.createServer((request, response) => {

    let json = {
        title: 'CDAC',
        id: 'MUMBAI'
    }

    response.end(JSON.stringify(json));

}).listen(5600);