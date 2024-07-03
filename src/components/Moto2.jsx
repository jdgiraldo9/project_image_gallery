import React from 'react'
import PropTypes from 'prop-types';
import moto2 from '../assets/img/moto2.jpg'

const Moto1 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={moto2} alt="Moto2" className="image"/>
     </div>
  )
}

Moto1.propTypes = {
    className: PropTypes.string
};

export default Moto1
