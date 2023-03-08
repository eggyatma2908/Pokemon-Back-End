const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/routers/index');

const app = express();
const PORT = 4000;

// Middleware (Morgan) Template
const middleware = (req, res, next) => {
  console.log('middleware is running');
  next();
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(middleware);

app.use('/v1', routes);

app.use('*', (req, res, next) => {
  const error = new Error('URL Not Found');
  error.status = 400;
  return next(error);
});

app.listen(PORT, ()=> console.log('server is running port 4000'));