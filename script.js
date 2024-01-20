// Let's bring the ul element to the DOM;

var elPokemonsList = document.querySelector(".js-pokemons-list");

// Let's check if we truly bring the ul element to the DOM 
// console.log(elPokemonsList);

// Let's wrap the first 15 pokemons into one variable, so that we can work with only that pokemon variables

var selectedPokemons = pokemons.slice(0, 15);

// Let's create for of iteration so that we can name the every pokemon value to one name

for(poke of selectedPokemons) {

    var newItem = document.createElement("li");
    var newItemPokeNum = document.createElement("span");
    var newItemPokeImage = document.createElement("img");
    var newItemPokeName = document.createElement("h3");
    var newItemPokeWeight = document.createElement("p");
    var newItemPokeCandyCount = document.createElement("p");
    var newItemPokeType = document.createElement("p");
    
    newItemPokeNum.textContent = poke.num;
    newItemPokeImage.src = poke.img;
    newItemPokeImage.alt = poke.name + " pokemon";
    newItemPokeName.textContent = poke.name;
    newItemPokeWeight.textContent = poke.weight;
    newItemPokeCandyCount.textContent = poke.candy_count;
    newItemPokeType.textContent = poke.type.join(" / ");
    
    
    newItem.classList.add("poke-list-item")
    newItemPokeNum.classList.add("poke-num");
    newItemPokeImage.classList.add("poke-img");
    newItemPokeName.classList.add("poke-name");
    newItemPokeWeight.classList.add("poke-weight");
    newItemPokeCandyCount.classList.add("poke-candy-count");
    newItemPokeType.classList.add("poke-type");
    
    newItem.append(newItemPokeNum, newItemPokeImage, newItemPokeName, newItemPokeWeight, newItemPokeCandyCount, newItemPokeType);
    elPokemonsList.appendChild(newItem);
    
}  