import React from 'react'
import PropTypes from 'prop-types';
import moto5 from '../assets/img/moto5.jpg'

const Moto1 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={moto5} alt="Moto5" className="image"/>
     </div>
  )
}

Moto1.propTypes = {
    className: PropTypes.string
};

export default Moto1
