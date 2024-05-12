/**3.- Utilizando la API https://hp-api.onrender.com/api/characters de personajes de Harry 
Potter realice una página que presente cada uno de los personajes en un card que 
contenga la imagen, nombre y casa (house). 
a.- Use una imagen por defecto para los personajes que no tengan imagen. 
b.- Realice una interfaz para filtrar por raza (species), género o ambos. 
c.- Actualice las cards para que los personajes que están muertos aparezcan con una X 
roja sobre la card  */
const charactersContainer = document.querySelector('.characters');
const speciesFilter = document.getElementById('species-filter');
const genderFilter = document.getElementById('gender-filter');

let characters = [];

fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
        characters = data;
        displayCharacters();
        addFilterEventListeners();
    })
    .catch(error => console.error(error));

function displayCharacters() {
    charactersContainer.innerHTML = '';

    characters.filter(filterCharacters).forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        if (!character.alive) {
            characterCard.classList.add('deceased');
        }

        const image = document.createElement('img');
        image.src = character.image || 'img.jpg';
        image.alt = character.name;

        const name = document.createElement('h3');
        name.textContent = character.name;

        const house = document.createElement('p');
        house.textContent = `Casa: ${character.house}`;

        characterCard.appendChild(image);
        characterCard.appendChild(name);
        characterCard.appendChild(house);

        charactersContainer.appendChild(characterCard);
    });
}

function filterCharacters(character) {
    const selectedSpecies = speciesFilter.value.toLowerCase();
    const selectedGender = genderFilter.value.toLowerCase();

    return (
        (selectedSpecies === '' || character.species.toLowerCase() === selectedSpecies) &&
        (selectedGender === '' || character.gender.toLowerCase() === selectedGender)
    );
}

function addFilterEventListeners() {
    speciesFilter.addEventListener('change', () => {
        displayCharacters();
    });

    genderFilter.addEventListener('change', () => {
        displayCharacters();
    });
}