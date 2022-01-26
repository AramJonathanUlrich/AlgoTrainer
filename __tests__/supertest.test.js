const request = require("supertest");
// const server = "http://localhost:3000";
const server = require('../server/server');

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe("Route integration", () => {
  // beforeEach((done) => {
  //   // replace with our own pg connection
  //   mongoose.connect(
  //     "mongodb://localhost:27017/acmedb",
  //     { useNewUrlParser: true },
  //     () => done()
  //   )
  // })

  // afterEach((done) => {
  //   // replace with our own pg version
  //   // removes all data once a test is finished
  //   mongoose.connection.db.dropDatabase(() => {
  //     mongoose.connection.close(() => done())
  //   })
  // })

  describe("/", () => {
    describe("GET", () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it("responds with 200 status and text/html content type", () => {
        return request(server)
          .get("/")
          .expect("Content-Type", /text\/html/)
          .expect(200);
      });
    });
  });

  describe("/flashcards", () => {
    describe("GET", () => {
      it("responds with 200 status and application/json content type", () => {
        return request(server)
          .get("/flashcards")
          .expect("Content-Type", /application\/json/)
          .expect(200);
      });

      // For this test, you'll need to inspect the body of the response and
      // ensure it contains the markets list. Check the markets.dev.json file
      // in the dev database to get an idea of what shape you're expecting.
      it("flashcards from DB are in body of response", () => {
        // // create initial data in database (modify to match pg)
        // const post = await Post.create({
        //   title: "Post 1",
        //   content: "Lorem ipsum",
        // })

        // for now use the same hardcoded data thats in server.js
        const flashcardsList = [
          {
            algoName: "13",
            algoPrompt: "fsadf",
            algoExample: "ljkfjj",
            algoType: "test1",
          },
          {
            algoName: "14",
            algoPrompt: "fsa545df",
            algoExample: "ljk1233fjj",
            algoType: "test2",
          },
        ];
        return request(server)
          .get("/flashcards")
          .expect(200)
          .then((response) => {
            // Check the response type
            expect(Array.isArray(response.body)).toBeTruthy();

            // Check the response data
            /* 
            // replace below expects with this block of code when we are able to grab entries from database
            expect(response.body[0]._id).toBe(post.id);
            expect(response.body[0].title).toBe(post.title);
            expect(response.body[0].content).toBe(post.content);
             */
            expect(response.body[0].algoName).toBe(flashcardsList[0].algoName);
            expect(response.body[0].algoPrompt).toBe(flashcardsList[0].algoPrompt);
            expect(response.body[0].algoExample).toBe(flashcardsList[0].algoExample);
            expect(response.body[0].algoType).toBe(flashcardsList[0].algoType);
          });
      });
    });

    // // below block of code should be used after we've set up database
    // // make sure to match with correct endpoint
    // describe("PUT", () => {
    //   xit("responds with 200 status and application/json content type", () => {
    //     const requestBody = {
    //       algoName: "new",
    //       algoPrompt: "new1",
    //       algoExample: "new2",
    //       algoType: "new3",
    //     };
    //     return request(server)
    //       .put("/flashcards")
    //       .send(requestBody)
    //       .expect("Content-Type", /application\/json/)
    //       .expect(200);
    //   });

    //   xit("responds with the updated flashcards list", () => {
    //     const requestBody = {
    //       algoName: "new",
    //       algoPrompt: "new1",
    //       algoExample: "new2",
    //       algoType: "new3",
    //     };
    //     return request(server)
    //       .put("/flashcards")
    //       .send(requestBody)
    //       .expect(200)
    //       .then((response) => {
    //         // Check the response type
    //         expect(Array.isArray(response.body)).toBeTruthy();

    //         // Check the response data
    //         expect(response.body[0].algoName).toBe(requestBody.algoName);
    //         expect(response.body[0].algoPrompt).toBe(requestBody.algoPrompt);
    //         expect(response.body[0].algoExample).toBe(requestBody.algoExample);
    //         expect(response.body[0].algoType).toBe(requestBody.algoType);
    //       });
    //   });

    //   xit("responds to invalid request with 400 status and error message in body", () => {
    //     return request(server)
    //     .put("/flashcards")
    //     .send({algoName: "fail"})
    //     .expect(400)
    //     .then((response) => {
    //       expect(response.body).toHaveProperty('error');
    //     });
    //   });
    // });
  });
});
