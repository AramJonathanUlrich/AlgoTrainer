
const db = require('./flashcardsModel.js');

const flashcardController = {};

flashcardController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const sqlVerifyUser = `SELECT username, password
  FROM users WHERE username='${username}' AND password='${password}';`;
  db.query(sqlVerifyUser)
  .then((data) => {
    res.locals.data = data.rows.length;
    return next();
  })
  .catch((err) => {
    return next({
      log: 'Error in flashcardController.verifyUser: Error validating user',
      message: { err: `${err}` },
    });
  })
};

flashcardController.addFlashcard = (req, res, next) => {
  const { algoName, algoPrompt, algoEx, algoType } = req.body;
  const sqlAddCard = `INSERT INTO flashcard (algoname, algoprompt, algoex, algotype)
  VALUES ('${algoName}', '${algoPrompt}', '${algoEx}', '${algoType}');`;
  db.query(sqlAddCard)
  .then((data) => {
    console.log('added succesfully: ', data);
    return next();
  })
  .catch((err) => {
    return next({
      log: 'Error in flashcardController.addFlashcard: Error creating flashcard',
      message: { err: `${err}` },
    })
  })
};

flashcardController.getFlashcards = (req, res, next) => {
  const sqlGetCards = `SELECT * FROM flashcard;`
  db.query(sqlGetCards)
  .then((data) => {
    res.locals.cards = data.rows
    return next();
  })
  .catch((err) => {
    return next({
      log: 'Error in flashcardController.getFlashcards: Error retrieving flashcards',
      message: { err: `${err}` },
    });
  })
};

flashcardController.deleteFlashcard = (req, res, next) => {
  const sqlDeleteCard = 'DELETE FROM flashcard WHERE flashcardid=$1;';
  db.query(sqlDeleteCard, [req.params.id])
  .then((data) => {
    return next();
  })
  .catch((err) => {
    return next({
      log: 'Error in flashcardController.getFlashcards: Error retrieving flashcards',
      message: { err: `${err}` },
    });
  });
};

module.exports = flashcardController;