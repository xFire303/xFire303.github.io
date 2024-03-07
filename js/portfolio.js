let cities = [
    {
        city: 'Tokyo',
        imgUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000',
        country: 'Japan',
        population: 'Population: 40,800,000'
    },
    {
        city: 'Rome',
        imgUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000',
        country: 'Italy',
        population: 'Population: 4,342,212'
    },
    {
        city: 'Stockholm',
        imgUrl: 'https://images.unsplash.com/photo-1588653818221-2651ec1a6423?q=80&w=1000',
        country: 'Sweden',
        population: 'Population: 2,415,139'
    }
];

function createCard(cityData) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('flip-card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('flip-card-inner');

    const frontSide = document.createElement('div');
    frontSide.classList.add('flip-card-front');
    frontSide.style.backgroundImage = `url(${cityData.imgUrl})`;

    const backSide = document.createElement('div');
    backSide.classList.add('flip-card-back');
    backSide.innerHTML = `
        <h1>${cityData.city}</h1>
        <p>Country: ${cityData.country}</p>
        <p>${cityData.population}</p>
    `;

    cardInner.appendChild(frontSide);
    cardInner.appendChild(backSide);
    cardContainer.appendChild(cardInner);

    return cardContainer;
}

const citiesContainer = document.createElement('div');
citiesContainer.id = 'cities-container';

document.body.appendChild(citiesContainer);

var card = createCard(cities[indice]);

citiesContainer.appendChild(card);