// Primero, vamos a crear una lista de todas las cartas del tarot:
let tarotDeck = ["El Loco", "El Mago", "La Sacerdotisa", "La Emperatriz", "El Emperador", "El Sumo Sacerdote", "Los Enamorados", "El Carro", "La Justicia", "El Ermitaño", "La Rueda de la Fortuna", "La Fuerza", "El Ahorcado", "La Muerte", "La Templanza", "El Diablo", "La Torre", "La Estrella", "La Luna", "El Sol", "El Juicio", "El Mundo", "El As de Bastos", "El Dos de Bastos", "El Tres de Bastos", "El Cuatro de Bastos", "El Cinco de Bastos", "El Seis de Bastos", "El Siete de Bastos", "El Ocho de Bastos", "El Nueve de Bastos", "El Diez de Bastos", "La Paje de Bastos", "La Caballero de Bastos", "La Reina de Bastos", "El Rey de Bastos", "El As de Copas", "El Dos de Copas", "El Tres de Copas", "El Cuatro de Copas", "El Cinco de Copas", "El Seis de Copas", "El Siete de Copas", "El Ocho de Copas", "El Nueve de Copas", "El Diez de Copas", "La Paje de Copas", "La Caballero de Copas", "La Reina de Copas", "El Rey de Copas", "El As de Espadas", "El Dos de Espadas", "El Tres de Espadas", "El Cuatro de Espadas", "El Cinco de Espadas", "El Seis de Espadas", "El Siete de Espadas", "El Ocho de Espadas", "El Nueve de Espadas", "El Diez de Espadas", "La Paje de Espadas", "La Caballero de Espadas", "La Reina de Espadas", "El Rey de Espadas", "El As de Oros", "El Dos de Oros", "El Tres de Oros", "El Cuatro de Oros", "El Cinco de Oros", "El Seis de Oros", "El Siete de Oros", "El Ocho de Oros", "El Nueve de Oros", "El Diez de Oros", "La Paje de Oros", "La Caballero de Oros", "La Reina de Oros", "El Rey de Oros"];


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
  