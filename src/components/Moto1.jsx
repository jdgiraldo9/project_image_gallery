import React from 'react'
import PropTypes from 'prop-types';
import moto1 from '../assets/img/moto1.jpg'

const Moto1 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={moto1} alt="Moto1" className="image"/>
     </div>
  )
}

Moto1.propTypes = {
    className: PropTypes.string
};

export default Moto1
