import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Новостная Лента" />
      <h1 className="headtext__cormorant">Подпишитесь</h1>
      <p className="p__opensans">Получайте свежие новости!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Напишите Ваш почтовый адрес" />
      <button type="button" className="custom__button">Подписаться</button>
    </div>
  </div>
);

export default Newsletter;
