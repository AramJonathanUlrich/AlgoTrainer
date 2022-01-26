// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// module.exports = app;

// we want supertest to use whatever port they want when testing
// therefore we export app from server.js without starting the server
// in production, we will start the server here
// in testing, supertest will start the server with it's own port
const app = require('./server');
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
