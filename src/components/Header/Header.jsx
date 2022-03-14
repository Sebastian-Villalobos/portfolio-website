import React from 'react';
import BgAnimation from '../BgAnimation/BgAnimation';

import './Header.scss';

const Header = () => (
  <>
    <div className="app__header">
      <div className="app__header-left">
        <div className="app__wrapper">
          <h2 className="app__h2">Hola, Mi Nombre es</h2>
          <h1 className="app__h1">Sebastián Villalobos</h1>
          <div className="app__title">
            <div className="app__title-wrapper">
              <div className="app__title-item">Desarrollador Front-End</div>
              <div className="app__title-item">Desarrollador React</div>
              <div className="app__title-item">Futuro Diseñador UX/UI</div>
              <div className="app__title-item">Trainee (Por el momento)</div>
            </div>
          </div>
          <p className="app__desc">
            Bienvenido a mi humilde Portfolio, te presento aquí un poco de las habilidades que he ido aprendiendo en <br />
            este arduo camino. Espero encuentres lo necesario para ese trabajo que tanto ansío. <br />
          </p>
        </div>
      </div>
      <div className="app__header-right">
        <BgAnimation />
      </div>
    </div>
  </>
);

export default Header;