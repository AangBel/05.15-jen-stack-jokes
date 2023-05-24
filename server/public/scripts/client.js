console.log("client.js sourced");

//TODO//
//Your job will be to build up the server 
//around the data in the `server/server.js` file, 
//display the current jokes to the DOM, 
//-----> and add the ability for users to add their own jokes and display these too.

$(document).ready(onReady);

function onReady() {
  console.log("DOM ready");
  $("#addJokeButton").on("click", post2Server);
  //is renderJokes on ready a correct
  //thing to do???
  renderJokes();
}

function renderJokes() {
  $.ajax({
    // url: "/jokesArray",
    url: "/server.jokes",
    method: "GET",
  }).then(function (response) {
    console.log(response);

    //whats output DIV?
    //why defining whole thing as the output div?
    //this variable = this id on the html is what this 
    //is saying... doesnt make sense though...?
    // let wholeThing = $(outputDiv);
    // //this is not appearing on the DOM console
    // console.log('what is whole thing?', wholeThing);
//would i feel more comfortable doing an reg. for loop?
let jokesNewArray = [
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
  ];

for (let i = 0; i < jokes.length; i++){

}
    for (let joke of response) {
      $('#outputDiv').append(`
                <li>
                
                ${joke.whoseJoke} 
                ${joke.jokeQuestion} 
                ${joke.punchLine}

                </li>
                `);
        //why did i divide these up like this?
    }

  });
}

function post2Server(event) {
  //this logs on DOM console 
 //i remembered to do (), yay!
  event.preventDefault(); 

  console.log("post2Server is joking");

  let who = $("#whoseJokeIn").val();
  console.log("who", who);

  let question = $("#questionIn").val();
  console.log("question In", question);

  let punch = $("#punchlineIn").val();
  console.log("punchline", punch);

  $.ajax({
    type: "POST",
    // url: "/server.jokes",
    url: "/jokesArray",
    data: {
      //maybe change these to whosejoke: whosjoke?
        whoseJoke: who,
        jokeQuestion: question,
        punchLine: punch
    }
  })
    .then(function (response) {
      console.log("Ajax and shit is working so far!");
      console.log(response);
      //not sure what the line below is doing...
      // renderToDom(response);

      //should i insert this instead?
      //is there always a call to the GET in the POST?
      getFromServer();
    })
    .catch(function (error) {
      //commenting out the alert bc its too aggressive 
      //for me right now lol 
      // alert("ah shit catch-ed this thing wrong");
      console.log("Request failed here is the error message:", error);
    });
//where is the end } to post2Server?
//are the variables below in the function?
//do they have to be?
//why am i not doing let who =...?
//refers to the data in ajax...
//but i have a feeling thats not how that works...

//id already declared these in lines 47-54
//what is this meant to be doing?
//can i consolidate this if its necessary?
  who = $("#whoseJokeIn").val();
  console.log('who',who);

  question = $("#questionIn").val();
  console.log('question in',question);

  punch = $("#punchlineIn").val();
  console.log('punchline',punch);

  console.log('who and question and punch:', who, question, punch);
}
//added event in parentheses here 
//because minus the on Ready, they all 
//seem to need it 
function getFromServer(event) {
  event.preventDefault(); 
  $.ajax({
    method: "GET",
    //changing the url here 
    //i need to figure out how to 
    //determine the correct URL 
    // url: "/jokesArray",
    url: "/server.jokes",
   
  })
    .then(function (response) {
      console.log(response);
      console.log("omg! GET from server is working?!");
      renderToDom(response);
    })
    .catch(function (error) {
      alert("request failed at GET from Server, try again...");
      console.log("request for GET from Server, failed!", error);
    });
}

 //end of get from server

function getFromArray(event) {
  event.preventDefault(); 
  console.log("getFromArray is working");
  $.ajax({
    method: "GET",
    url: "/server",
    text: {
      first: who,
      second: question,
      third: punch,
    }, //end of data
  })
    .then(function (response) {
      console.log(response);
      console.log("omg! GET from server is working at GET from Array?!");
      //render to DOM response again?
      //porque???
      // renderToDom(response);
    })
    .catch(function (error) {
      alert("request failed! at GET from Array try again...");
      console.log("request for GET at Get from Array", error);
    });
}
function renderToDom(jokes) {
//Why does this one not need a prevent Default for event?
  console.log("Got Data! @ renderToDom");
  let wholeThing = 
  //why arrays of 0, again?
    jokes[0].who 
  + jokes[0].question 
  + jokes[0].punch;

  //dont i need a loop to get to an array
  // like below?

  $("#outputDiv").append(`

    <li>${wholeThing[jokes.length - 1]}</li>
    <li>${wholeThing}</li>
    `);
}
