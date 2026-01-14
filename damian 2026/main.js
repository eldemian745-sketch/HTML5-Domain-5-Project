console.log("js console");

let data;
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

            if card.innerHTML= textData

            if (song.imgSrc){ 
                card.style.backgroundImage = "url(" +song.imgSrc + ")";
            }

            grid.appendChild(card);
        });
    }
};

xhttp.open("GET", "songdata.JSON", true);
xhttp.send();