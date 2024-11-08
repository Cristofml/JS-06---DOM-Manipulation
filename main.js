const users = [
    {
        id: 1,
        user_name: 'Nombre',
        description: 'Descripcion',
        age: '46',
        fav_music: {
            bands: [
                'PXNDX', 'AC-DC', 'SystemOfDown', 'Guns n roses'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Nombre 2',
        description: 'Descripcion',
        age: '23',
        fav_music: {
            bands: [
               'El Bogueto', 'Daniflaw', 'Feid', 'Bellakath'
            ]
        }
    }
];

// Función para crear la tarjeta de un usuario
const createCard = (user) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const userName = document.createElement('h2');
    userName.textContent = user.user_name;
    card.appendChild(userName);

    const description = document.createElement('p');
    description.textContent = user.description;
    card.appendChild(description);

    const age = document.createElement('p');
    age.textContent = `Age: ${user.age}`;
    card.appendChild(age);

    const favMusic = document.createElement('p');
    favMusic.textContent = 'Bandas Favoritas:';
    card.appendChild(favMusic);

    const bandsList = document.createElement('ul');
    user.fav_music.bands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        bandsList.appendChild(listItem);
    });
    card.appendChild(bandsList);

    return card;
};

// Función para renderizar las tarjetas de todos los usuarios
const renderCards = (users) => {
    const container = document.querySelector('.card--conteiner');
    container.innerHTML = ''; // Limpiar el contenido previo

    users.forEach(user => {
        const card = createCard(user);
        container.appendChild(card);
    });
};

// Llamada a la función para renderizar las tarjetas
renderCards(users);
