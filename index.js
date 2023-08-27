require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./app/router.js');
const { showErrors, notFound } = require('./middlewares/errorHandlers.js');


app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

app.use(router);


app.use(notFound);

app.use(showErrors);

app.listen(process.env.PORT, () =>
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
);