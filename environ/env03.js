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

