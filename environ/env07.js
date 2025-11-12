let KokoInfo = {
    name: "koko",
    species: "clown",
    age: 20,
    birthplace: "New York",
    hairColor: "black",
    occupation: "preformer"
};



$(function () {
    const output = $("#output");
    let keys = Object.keys(KokoInfo);

    keys.forEach(key => {
        let id = `${key}`;
        const d = $("<div></div>").attr("id", id).text(`${key}: 
            ${KokoInfo[key]}`);
        output.append(d);
    });
});




function displayPhrase()
{
  document.getElementById("weather").innerHTML = "the rain?";
    document.getElementById("my-button").onclick = function() {
    document.getElementById("rain").style.visibility = "visible";
    $("#ghost").animate({opacity: "0.4"})
    $("#ghost").animate({opacity: "0.6"})
    $("#ghost").animate({opacity: "0.5"})
    $("#ghost").animate({opacity: "0.1"})
    $("#ghost").animate({opacity: "0.2"})
    $("#ghost").animate({opacity: "1"})

    $("#where").animate({ height: "-=20px"})
    $("#where").animate({opacity: "0.4"})
    $("#where").animate({opacity: "0.6"})
    $("#where").animate({opacity: "0.5"})
    $("#where").animate({opacity: "0.1"})
    $("#where").animate({opacity: "0.2"})
    $("#where").animate({opacity: "1"})
 
   
}
    };
