import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icons-play.png';
import plusIcon from '../assets/static/icons-plus.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt='woman' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details-img' src={playIcon} alt='play' />
        <img className='carousel-item__details-img' src={plusIcon} alt='plus' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {`
          ${year}
          ${contentRating}
          ${duration}
          `}
      </p>
    </div>
  </div>
);

/* vamos a validar con PropTypes que tipo de datos reciben nuestras props
hay que tener presente que no se puede llamar de igual forma(PropTypes),
se tiene que llamar asi (propTypes) por que sino nos manda un error.
*/

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
