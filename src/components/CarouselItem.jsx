import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='woman' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details-img' src='/imagenes/icons-play.png' alt='play' />
        <img className='carousel-item__details-img' src='/imagenes/icons-plus.png' alt='plus' />
      </div>
      <p className='carousel-item__details--title'>Titulo descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;