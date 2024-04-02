import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Ищите новый вкус" />
      <h1 className="app__header-h1">Ключ К Изысканной Кухне</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Мирель решила выйти в большой мир грамматики.</p>
      <button type="button" className="custom__button">Посмотреть Меню</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
