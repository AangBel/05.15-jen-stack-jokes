const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("server/public"));
// app.use(express.static("/server"));
//jokes is an array , that already holds within it some elements
//we want to

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!",
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?",
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!",
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!",
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu.",
  },
  // for(let i of jokes{})
];
console.log(jokes);

app.get("/GET", function (req, res) {
  console.log("Request for /GET was made");

  // send back list of quotes to client
  res.send(jokes[0]);

  // If I want to send an error:
  // res.sendStatus(500);
});

app.post("/POST", function (req, res) {
  console.log("POST some data!", req.body);

  req.body.whoseJoke;
  req.body.jokeQuestion;
  req.body.punchLine;
  // let grabJokes = req.body;
  // jokes.push({grabJokes})

  // let saveJokes =  `${grabJokes.jokes}`
  // console.log(saveJokes);
});
// serve back static files


app.listen(PORT, () => {
  console.log("server running on: ", PORT);
}); // end spin up server
