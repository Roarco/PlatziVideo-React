/* este archivo es una mejor forma de trabajar nuestros componetentes,
ya que aqui los estamos conteniendo en un contenedor
*/
/*
aqui vamos a importar todos los componetentes,
para  asi tener un contenedor principal con cada,
uno de ellos
*/

import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';

const App = () => (
  <div className='app'>
    <Header />
  </div>
);

export default App;
