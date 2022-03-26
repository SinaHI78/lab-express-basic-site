const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('This is a page about Tāranātha, the Tibetan Jonang master');
});

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/photogallery', (request, response) => {
  response.sendFile(__dirname + '/views/photogallery.html');
});

app.listen(3000);
