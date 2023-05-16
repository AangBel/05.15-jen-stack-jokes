console.log("client.js sourced");

$(document).ready(onReady);

let who = $("#whoseJokeIn").val();
let question = $("#questionIn").val(); 
let punch = $("#punchlineIn").val();
let jokes = [];

jokes.push[
    {
    who: who,
    question: $("#questionIn").val(),
    punch: $("#punchlineIn").val()
}
];

console.log(jokes);


function onReady() {
console.log("DOM ready");
$("#addJokeButton").on("click", post2Server);
}

function post2Server(event) {
console.log("post2Server is joking");

event.preventDefault();

$.ajax({
    type: 'POST',
    url: "/server",
    // data: {
    //     who: $("#whoseJokeIn").val(""),
    //     question: $("#questionIn").val(""),
    //     punch: $("#punchlineIn").val("")
    // }
}).then(function(response){
    console.log('Ajax and shit is working so far!');
    console.log(response);
    renderToDom(response);
})
.catch(function (error) {
    alert("ah shit catch-ed this thing wrong");
    console.log("Request failed", error);
});

who = $("#whoseJokeIn").val();
console.log(who);

question = $("#questionIn").val();
console.log(question);

punch = $("#punchlineIn").val();
console.log(punch);

console.log(who, question, punch);

   
}
// renderToDom();

    // function getFromServer() {
    //     $.ajax({
    //     method: "GET",
    //     url: "/server",
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //         console.log("omg! GET from server is working?!");
    //         renderToDom(response);
    //     })
    //     .catch(function (error) {
    //         alert("request failed!, try again...");
    //         console.log("request for GET failed!", error);
    //     });
    //     // calculator();
    //   } //end of get from server


function getFromArray() {
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
        console.log("omg! GET from server is working?!");
        renderToDom(response);
    })
    .catch(function (error) {
        alert("request failed!, try again...");
        console.log("request for GET failed!", error);
    });
    // calculator();
}
function renderToDom(jokes) {
    console.log("Got Data!");


    let wholeThing = (jokes[0].who + jokes[0].question + jokes[0].punch);
    $("#outputDiv").append(`

    <li>${wholeThing[jokes.length -1]}</li>
    <li>${wholeThing}</li>
    `);
} 
renderToDom();
// $('#answer').text(total)


    // let total = $(inputA) + potato + $(inputB);
    // console.log("total", total);
    // for (let i of calcHx{length-1});

    




