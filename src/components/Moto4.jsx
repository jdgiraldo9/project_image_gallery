import React from 'react'
import PropTypes from 'prop-types';
import moto4 from '../assets/img/moto4.jpg'

const Moto1 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={moto4} alt="Moto4" className="image"/>
     </div>
  )
}

Moto1.propTypes = {
    className: PropTypes.string
};

export default Moto1
