import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '5600₽',
    tags: 'AU | Бутылка',
  },
  {
    title: 'Catena Malbee',
    price: '5900₽',
    tags: 'AU | Бутылка',
  },
  {
    title: 'La Vieillw Rose',
    price: '4400₽',
    tags: 'FR | 750 мл',
  },
  {
    title: 'Rhino Pale Ale',
    price: '3100₽',
    tags: 'CA | 750 мл',
  },
  {
    title: 'Irish Guinness',
    price: '2600₽',
    tags: 'IE | 750 мл',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '2000₽',
    tags: 'Aperol | Villa Marchesi prosecco | Сода | 30 мл',
  },
  {
    title: "Dark 'N' Stormy",
    price: '1600₽',
    tags: 'Темный Ром | Имбирное Пиво | Ломтик Лайма',
  },
  {
    title: 'Daiquiri',
    price: '1000₽',
    tags: 'Ром | Цитрусовый сок | Сахар',
  },
  {
    title: 'Old Fashioned',
    price: '3100₽',
    tags: 'Бурбон | Тросниковый Сахар | Настойка Ангостур',
  },
  {
    title: 'Negroni',
    price: '2600₽',
    tags: 'Джин | Сладкий Вермут | Кампари | Апельсиновый Гарнир',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Гурмонд',
    subtitle: 'Разнообразный и богатый опыт.',
  },
  {
    imgUrl: images.award01,
    title: 'Восходящая Звезда',
    subtitle: 'Наше дело не так однозначно, как может показатьс.',
  },
  {
    imgUrl: images.award05,
    title: 'Гостеприимство',
    subtitle: 'Новая модель организационной деятельности предоставляет широкие возможности.',
  },
  {
    imgUrl: images.award03,
    title: 'Выдающийся шеф-повар',
    subtitle: 'Современная методология разработки представляет собой интересный эксперимент.',
  },
];

export default { wines, cocktails, awards };
