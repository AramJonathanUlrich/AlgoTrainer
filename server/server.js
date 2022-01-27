const express = require('express');
const app = express();
const path = require('path');
const flashcardController = require('./flashcardController.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.post('/create', flashcardController.addFlashcard, (req, res) => {
  res.sendStatus(200);
});

app.post('/login', flashcardController.verifyUser, (req, res) => {
  if(res.locals.data) {
    res.locals.login = true;
  }else {
    res.locals.login = false;
  }
    res.status(200).json(res.locals.login);
  });

app.get('/flashcards', flashcardController.getFlashcards, (req, res) => {
  res.status(200).json(res.locals.cards);
});

app.delete('/delete/:id', flashcardController.deleteFlashcard, (req,res) => {
  res.sendStatus(200);
})

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


module.exports = app;
