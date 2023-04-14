var entry = document.getElementById("entry");
var saveButton = document.getElementById("save");
console.log(saveButton)
saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var journal = {
        entry: entry.value.trim(),

    };


    localStorage.setItem("journal", JSON.stringify(journal));
    console.log("Hello")
});

function weatherApi() {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=indianapolis&appid=f1e9804071ae403822444ebea900347d'
    fetch(weatherUrl)
        .then(function(response) {
            return response.JSON();
        });
}
