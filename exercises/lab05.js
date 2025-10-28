function askNumber(whatNumber) {
let userNumber = prompt("Guess 1-10?");
if (userNumber == whatNumber) {
    $("#output").html("yayyy that was correct");
    }
else {
    $("#output").html("nope :( try again");
    }
}

$("#good-button").click(function () {
    askNumber(7);
});

