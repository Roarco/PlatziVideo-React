/* eslint-disable react/jsx-props-no-spreading */
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
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initalState = useInitialState(API);

  return (
    <div className='app'>
      <Header />
      <Search />
      {/*Vamos a crear una validacion para el caso en el que si mi lista no tiene ningun
      elemento no se muestre en pantalla
       */}
      {
        initalState.mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              {
                initalState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
              }
            </Carousel>
          </Categories>
        )
      }

      {/* vamos hacer que la categoria de tendencias tenga un llamado por cada uno de los items
      para asi poder iterar y poder mostrar la informacion en cada uno de estos.
      */}
      <Categories title='Tendencias'>
        <Carousel>
          {
            initalState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      {/* vamos hacer que la categoria de Originales de platzi video tenga un llamado por cada uno de los items
      para asi poder iterar y poder mostrar la informacion en cada uno de estos.
      */}
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {
            initalState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
