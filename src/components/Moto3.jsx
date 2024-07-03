import React from 'react'
import PropTypes from 'prop-types';
import moto3 from '../assets/img/moto3.jpg'

const Moto1 = ({className}) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={moto3} alt="Moto3" className="image"/>
     </div>
  )
}

Moto1.propTypes = {
    className: PropTypes.string
};

export default Moto1
