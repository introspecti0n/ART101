// add a button titled click me

//when it is clicked
//add one to the total number

// show the total number.
//on our button 
// show "clicked total number times"

// a top limit 

let totalNum = 0;
$("#needy-button") .click (function() {
    totalNum = totalNum + 3;
   // $("#needy-button").html (
    //"you clicked me " + totalNum + " times!"
    //)
    let sentence = "I was clicked " + totalNum + " times!"
    $("#needy-button").html(sentence);
});