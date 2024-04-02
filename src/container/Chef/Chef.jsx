import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Слово Шеф Повара" />
      <h1 className="headtext__cormorant">Во что мы верим</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"> Грустный риторический вопрос скатился по щеке и он продолжил свой путь.</p>
        </div>
        <p className="p__opensans">По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз.</p>
      </div>

      <div className="app__chef-sign">
        <p>Кевин Луо</p>
        <p className="p__opensans">Шеф Повар | Основатель</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
