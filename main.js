console.log("js console");


let grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        data =JSON.parse(xhttp.responseText);
        console.log(data);
        data.forEach(function(song){
            let card = document.createElement("div");
            card.classList.add("card");

            let textData = 
            "<div class='song tittle'>" + song.title + "</div>" +
            "<span>" + 
            "Publisher:" + song.publishier + "<br>" + "Release Date: " + song.releaseDate + "<br>" + 
            "Needs Research:" + "</span>";

            card.innerHTML = textData;

            if (card.innerHTML= textData

        )if (song.imgSrc){ 
                card.style.backgroundImage = "url(" +song.imgSrc + ")";
            }

            grid.appendChild(card);
        });
    }
;

xhttp.open("GET", "songdata.JSON", true);
xhttp.send();

console.log("js started");

var data;
var grid = document.querySelector(".grid-container");

// LOAD DATA (localStorage first, otherwise XHR)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      console.log("Loaded from gameData.json");

      localStorage.setItem("datalist", JSON.stringify(data));
      console.log("Saved starter data to localStorage");

      if (grid) {
        makeCards();
      }
    }
  };

  xhttp.open("GET", "gameData.json", true);
  xhttp.send();
}

// RENDER CARDS
function makeCards() {
  grid.innerHTML = "";

  data.forEach(function (game) {
    let card = document.createElement("div");
    card.classList.add("card");

    let textData =
      "<div class='game-title'>" + game.title + "</div>" +
      "<div>Publisher: " + game.publisher + "</div>" +
      "<div>Release Date: " + game.releaseDate + "</div>";

    card.innerHTML = textData;
    grid.appendChild(card);
  });

  console.log("cards refreshed");
}

console.log("form script started");

// Safe load for form page (works even if script.js isn't loaded first)
if (localStorage.getItem("datalist")) {
  data = JSON.parse(localStorage.getItem("datalist"));
} else {
  data = [];
}

var form = document.querySelector("form");
var titleInput = document.querySelector("#title-input");
var pubInput = document.querySelector("#publisher-input");
var dateInput = document.querySelector("#release-date-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var newObj = {
    title: titleInput.value,
    publisher: pubInput.value,
    releaseDate: dateInput.value
  };

  data.push(newObj);
  localStorage.setItem("datalist", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  // Only render if grid exists on this page
  if (document.querySelector(".grid-container")) {
    makeCards();
  }

  form.reset();
});}

