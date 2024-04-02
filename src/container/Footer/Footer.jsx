import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Связаться</h1>
        <p className="p__opensans">9 стр. 53В, Тих, 10019, Москва</p>
        <p className="p__opensans">+7 212-344-1230</p>
        <p className="p__opensans">+7 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__footer-links_logo-item"> Caffè </h1>

        <p className="p__opensans">&quot;Лучший способ найти себя - это раствориться в служении другим.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Рабочие Часы</h1>
        <p className="p__opensans">Понедельник-Пятница:</p>
        <p className="p__opensans">08:00-00:00 </p>
        <p className="p__opensans">Суббота-Воскресенье:</p>
        <p className="p__opensans">07:00-11:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024  Caffè . Все права сохранены.</p>
    </div>

  </div>
);

export default Footer;
