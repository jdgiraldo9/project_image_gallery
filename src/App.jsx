import './App.css'
import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'
import Moto1 from './components/Moto1';
import Moto2 from './components/Moto2';
import Moto3 from './components/Moto3';
import Moto4 from './components/Moto4';
import Moto5 from './components/Moto5';
import Moto6 from './components/Moto6';

function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <h1 id="title" className='text-center my-3' >Proyecto Galeria </h1>
      </div>
      <Routes>
        <Route path="/moto1" element={<Moto1 className='image-size'/>}/>
        <Route path="/moto2" element={<Moto2 className='image-size'/>}/>
        <Route path="/moto3" element={<Moto3 className='image-size'/>}/>
        <Route path="/moto4" element={<Moto4 className='image-size'/>}/>
        <Route path="/moto5" element={<Moto5 className='image-size'/>}/>
        <Route path="/moto6" element={<Moto6 className='image-size'/>}/>
      </Routes>
      <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App
