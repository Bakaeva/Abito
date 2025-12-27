const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');


const cardArray = [
    {
        id: 0,
        title: 'Первый товар',
        price: '170 ₽',
        location: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png',
    },
    {
        id: 1,
        title: 'Второй товар',
        price: '171 ₽',
        location: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png',
    },
    {
        id: 2,
        title: 'Третий товар',
        price: '172 ₽',
        location: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png',
    },
    {
        id: 3,
        title: 'Четвертый товар',
        price: '173 ₽',
        location: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png',
    },
    {
        id: 4,
        title: 'Пятый товар',
        price: '174 ₽',
        location: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png',
    },
    {
        id: 5,
        title: 'Шестой товар',
        price: '175 ₽',
        location: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png',
    }
];

const render = (cardCollection) => {
    cardWrapper.innerHTML = '';

    cardCollection.forEach((card) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="./product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${card.img}" alt="${card.title}">
                </div>
                <h5 class="content-main__list-item--title">${card.title}</h5>
                <strong class="content-main__list-item--price">${card.price}</strong>
                <div class="content-main__list-item--info-box">
                    <span class="content-main__list-item--info">${card.location}</span>
                    <span class="content-main__list-item--info">${card.date}</span>
                </div>
            </a>
        `);
    });
}

const flteredArray = (cardCollection, substr) => {
    return cardCollection.filter((card) => {
        return card.title.toLowerCase().includes(substr.toLowerCase()) ||
            card.price.toLowerCase().includes(substr.toLowerCase());
    });
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';

render(cardArray);

searchBtn.addEventListener('click', () => {
    render(flteredArray(cardArray, searchInput.value));
});
