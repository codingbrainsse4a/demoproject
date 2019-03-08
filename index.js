const express = require('express');
const mysql = require('mysql');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
const app = express();
const auth = require('./routes/frontend');
const frontend = require('./routes/frontend');




app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

app.use(frontend);


app.listen(3000);