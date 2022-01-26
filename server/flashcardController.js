
const db = require('./flashcardsModel.js');

const flashcardController = {};

flashcardController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  console.log('username: ', username);
  console.log('password: ', password);
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

flashcardController.getHomeworld = (req, res, next) => {
  // write code here

  next();
};

flashcardController.getFilm = (req, res, next) => {
  // write code here

  next();
};

flashcardController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = flashcardController;