// add a button titled click me
//when it is clicked
//add one to the total number
// show the total number.
//on our button 
// show "clicked total number times"
// a top limit 

let totalNum = 0;
let colors= ["AliceBlue", "Azure", "DarkCyan", "LightSteelBlue"]; //new line to add

$("#needy-button") .click (function() {


    let reminder = totalNum % colors.length;
    $("#needy-button").html (
    "you clicked me " + totalNum + " times! " + "Color: " + colors[totalNum] );



    $("body").css("background-color", colors [reminder])
    totalNum = totalNum + 1;

    if (totalNum == 4) {totalNum = 0;}

    if (totalNum < 5) {text = "fresh and happy";}
    else if (7 > totalNum > 5 ) {text = "...keep pushing";}
    else if (10 > totalNum > 5 ) {text = "...keep pushing";}
});