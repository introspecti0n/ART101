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
        const d = $("<div></div>").attr("id", id).text(`${key}: ${KokoInfo[key]}`);
        output.append(d);
    });
});





function displayPhrase()
{
  document.getElementById("weather").innerHTML = "the rain?";
    document.getElementById("my-button").onclick = function() {
    document.getElementById("rain").style.visibility = "visible";
}
    };
