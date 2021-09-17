/* eslint-disable react/jsx-props-no-spreading */
/* este archivo es una mejor forma de trabajar nuestros componetentes,
ya que aqui los estamos conteniendo en un contenedor
*/
/*
aqui vamos a importar todos los componetentes,
para  asi tener un contenedor principal con cada,
uno de ellos
*/

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  //useState
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  }) ;

  //useEffect
  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Search />
      {/*Vamos a crear una validacion para el caso en el que si mi lista no tiene ningun
      elemento no se muestre en pantalla
       */}
      {
        videos.mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              <CarouselItem />
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
            videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
