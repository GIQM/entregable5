import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import Home from './components/Home'
import Item from './components/Item'
import ProtectedRoutes from './components/ProtectedRoutes'
import pokedex from "./assets/img/pokedex.png"
import gif from "./assets/img/gif.gif"
import Confi from './components/Confi'
import pikachu from './assets/img/pikachu.png'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <header>
          <img className='title' src={pokedex} alt="pokedex" />
          <div className='yellow_stripe'></div>
          <div className='white_circle'>
            <div className='gray_circle'>
              <img src={gif} alt="" />
            </div>
          </div>
          <div className='black_stripe'></div>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<Item />} />
            <Route path='/confi' element={<Confi />} />
          </Route>
        </Routes>
        <article className='footer'>
        <footer>
          <h2>Hecho con &nbsp;<i class="fa-solid fa-heart"></i> &nbsp;en Academlo &nbsp; <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gilbert Quispe</h2>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <img src={pikachu} alt="" />
        </footer>
        </article>
      </HashRouter>
    </div>
  )
}

export default App
