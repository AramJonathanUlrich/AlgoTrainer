const express = require('express');
const app = express();
// const app = require('./start');
// const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.use('/', express.static(path.join(__dirname, '../src')));

app.post('/create', (req, res) => {
  res.locals.data = req.body;
  res.locals.test = { location: '/test' };
  res.status(200).json({ location: res.locals.test, data: res.locals.data });
});

app.get('/flashcards', (req, res) => {
  res.status(200).json([
    {
      algoName: '13',
      algoPrompt: 'fsadf',
      algoExample: 'ljkfjj',
      algoType: 'test1',
    },
    {
      algoName: '14',
      algoPrompt: 'fsa545df',
      algoExample: 'ljk1233fjj',
      algoType: 'test2',
    },
  ]);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
module.exports = app;
