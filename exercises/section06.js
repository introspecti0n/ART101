function checkMood(score) {

if (score > 7) {
document.body.style.backgroundColor = "#85d2ffff";
return "ex01";
} else if (score > 4) {
document.body.style.backgroundColor = "#f8c4e9ff";
return "ex02";
} else {
document.body.style.backgroundColor = "#c2fcd6ff";
return "ex03";
}

  }

  function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);




    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }

  $("#mood-button").click(function () {
    showMood();
  });
