import React from 'react';
import BgAnimation from '../BgAnimation/BgAnimation';
import { AppWrap } from '../../wrapper';

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
              <div className="app__title-item">JavaScript y React</div>
              <div className="app__title-item">Diseñador Autodidacta</div>
              <div className="app__title-item">Buscando Exp. y Mentores</div>
              <div className="app__title-item">Creciendo día a día</div>
            </div>
          </div>
          <p className="app__desc">
            Bienvenido a mi Portfolio, te presento aquí las habilidades que he ido aprendiendo <br />
            a lo largo de mi camino. Espero encuentres lo que necesitas para el trabajo que quieres. 
          </p>
        </div>
      </div>
      <div className="app__header-right">
        <BgAnimation />
      </div>
    </div>
  </>
);

export default AppWrap(Header, 'inicio');