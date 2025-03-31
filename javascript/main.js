const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1);

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
          return response.json();
    })
    .then(function(realData){
        pokemonImage.scr = realData.sprites.front_default;
    });


const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;
catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2);
    if(catchNumber === 0){
      pokemonText.innerText = "pokemon runs away!"
    }
    else(catchNumber === 1);{
        pokemonText.innerText = "pokemon caught!"
    }
    pokemonGamePlayed = true;
    }
}

const  nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input");

inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = inputField.value;
        let age = fetch("https://api.agify.io?name=" + name)
            .then(function(response){
               return response.json();
            })
            .then(function(jsonData){
              inputField.style.display = "none";  
              nameText.innerText =  jsonData.age +" jaar oud";
            });
    }
}

const h2 = document.getElementById("js--h2");
const p = document.getElementById("js--p");
let serie = fetch("https://api.tvmaze.com/search/shows?q=ferb%20phineas")
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        const show = jsonData[0].show;
        h2.innerText = show.name;
        p.innerHTML = show.summary;
    });

