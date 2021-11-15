const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');
const cors = require('cors');

const apiRouter = require('./routes/api');

const port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use(express.json());
app.use('/sharks', sharks);
app.use('/api', apiRouter);

app.listen(port, function () {
  console.log(`Example app listening on ${port}!`);
})
