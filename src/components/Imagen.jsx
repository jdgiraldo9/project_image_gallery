import React from 'react'
import PropTypes from 'prop-types';

const Imagen = ({imagen,textMoto,className}) => {
  return (
    <div className='imagen-container ${className}'>
      <img src={imagen} alt={textMoto} className='imagen'/>
    </div>
  )
}

Imagen.propTypes = {
  className: PropTypes.string
};

export default Imagen


