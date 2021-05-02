import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'core/components/Button';
import './styles.scss';

const Home = () => (
  <div className="home-container">
    <div className="home-title">
      <h1>Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
    </div>

    <div className="home-content">
      <p>
        Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
      </p>
      <p>
        Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.
      </p>
      <p>
        Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
      </p>
    </div>

    <div className="home-btn-container">
      <Link to="/search">
        <Button text="Começar" />
      </Link>
    </div>
  </div>
)

export default Home;