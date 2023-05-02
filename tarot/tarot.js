// Primero, vamos a crear una lista de todas las cartas del tarot:
let tarotDeck = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Justice", "The Hermit", "The Wheel of Fortune", "Strength", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World", "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands", "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords", "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles"];

// Función para generar un número aleatorio entre min y max (ambos incluidos)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para seleccionar cartas del tarot y colocarlas en una tabla aleatoriamente
function generateTarotSpread(numCards, useMajorArcanaOnly) {
  // Crear un array con las cartas a usar (mayor arcana o todas las cartas)
  let cards = useMajorArcanaOnly ? tarotDeck.slice(0, 22) : tarotDeck;
  
  // Crear un array con las posiciones posibles de la tabla (ejemplo: 3x3)
  let positions = ["top-left", "top-center", "top-right"];
  
  // Crear un array con las cartas seleccionadas al azar
  let selectedCards = [];
  for (let i = 0; i < numCards; i++) {
    // Seleccionar una carta aleatoria
    let randomCardIndex = getRandomInt(0, cards.length - 1);
    let randomCard = cards[randomCardIndex];
    selectedCards.push(randomCard);
    
    // Eliminar la carta seleccionada para que no se repita
    cards.splice(randomCardIndex, 1);
  }
  
  // Crear la tabla y colocar las cartas seleccionadas en posiciones aleatorias
  let table = "<table>";
  for (let i = 0; i < positions.length; i++) {
    // Si hay una carta seleccionada para esta posición, colocarla
    if (selectedCards.length > 0) {
      let randomCardIndex = getRandomInt(0, selectedCards.length - 1);
      let randomCard = selectedCards[randomCardIndex];
      selectedCards.splice(randomCardIndex, 1);
      table += "<td class='" + positions[i] + "'>" + randomCard + "</td>";
    }
    // Si no hay carta seleccionada, colocar un espacio vacío
    else {
      table += "<td class='" + positions[i] + "'></td>";
    }
  }
  table += "</table>";
  
  // Devolver la tabla con las cartas seleccionadas y colocadas aleatoriamente
  return table;
}





function cambiarEstilo() {
    let body = document.querySelector("body");
    if (body.classList.contains("tema-claro")) {
      body.classList.remove("tema-claro");
      body.classList.add("tema-oscuro");
    } else {
      body.classList.remove("tema-oscuro");
      body.classList.add("tema-claro");
    }
  }
  