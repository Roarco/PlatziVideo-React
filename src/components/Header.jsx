/* esto es un componente de react, especificamente uno presentacional, aqui importamos
react y en algunos casos si usamos componetes stateFul tambien usaremos el component de
react */
import React from 'react';
import '../assets/styles/components/Header.scss';

/* crearemos componentes presentacionales, con un return explicito*/
const Header = () => (
  <header className='header'>
    <img className='header__img' src='/imagenes/logo-platzi-video-BW2.png' alt='Platzi-Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='/imagenes/user-icon.png' alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesion</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
