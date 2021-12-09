const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
var cors = require('cors');
const routes = require('./routes');
const { errorHandler, notFound } = require('./middleware/errorHandler');
require('colors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use('/', routes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
