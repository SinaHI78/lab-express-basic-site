const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.pageTitle = 'My homepage about Tāranātha';

app.get('/home', (request, response) => {
  response.render('home');
});

app.get('/about', (request, response) => {
  response.render('about');
});

app.get('/works', (request, response) => {
  response.render('works');
});

app.get('/photogallery', (request, response) => {
  response.render('photogallery');
});

app.listen(3000);
