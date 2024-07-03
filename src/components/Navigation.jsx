import React from 'react'
import { Link } from 'react-router-dom'
import Moto1 from './Moto1'
import Moto2 from './Moto2'
import Moto3 from './Moto3'
import Moto4 from './Moto4'
import Moto5 from './Moto5'
import Moto6 from './Moto6'

const Navigation = () => {
  return (
    <div  className="container mt-4 father">
      <Link to="/moto1" className='link'>
        <figure className='image-size'>
        <Moto1 />
          <figcaption>Moto 1</figcaption>
        </figure>
      </Link>
      <Link to="/moto2" className='link'>
        <figure className='image-size'>
        <Moto2 />
          <figcaption>Moto 2</figcaption>
        </figure>
      </Link>
      <Link to="/moto3" className='link'>
        <figure className='image-size'>
        <Moto3 />
          <figcaption>Moto 3</figcaption>
        </figure>
      </Link>
      <Link to="/moto4" className='link'>
        <figure className='image-size'>
        <Moto4 />
          <figcaption>Moto 4</figcaption>
        </figure>
      </Link>
      <Link to="/moto5" className='link'>
        <figure className='image-size'>
        <Moto5 />
          <figcaption>Moto 5</figcaption>
        </figure>
      </Link>
      <Link to="/moto6" className='link'>
        <figure className='image-size'>
        <Moto6 />
          <figcaption>Moto 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default Navigation
