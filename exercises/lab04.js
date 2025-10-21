let myCommutes = ["metro bus", "UCSC taps bus", "my car", ];

let myFavouriteCommute = {
    type: "my car",
    route: 1,
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["myself!"]
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[2] + ", " + myCommutes[1] + "</p>";


megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence);