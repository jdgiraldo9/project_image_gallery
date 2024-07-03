import React from 'react'
import PropTypes from 'prop-types';
import moto6 from '../assets/img/moto6.jpg'

const Moto1 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={moto6} alt="Moto6" className="image"/>
     </div>
  )
}

Moto1.propTypes = {
    className: PropTypes.string
};

export default Moto1
