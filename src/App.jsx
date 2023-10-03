
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Categorias from './components/Categorias'
import { CartProvider } from './context/cartContext'
import Cart from './components/Cart'

import { ThemeProvider } from './components/ThemeContext'
import Checkout from './components/Checkout'

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <ThemeProvider>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting= "Sean bienvenidos al lugar donde podes encontrar lo que quieras al crochet"/>}/>
          <Route exact path='/categoria/:id' element={<ItemListContainer />}/>
          <Route exact path='/detail/:id' element={<ItemDetailContainer />}/>
          <Route exact path='/cart' element={<Cart />}/>
          <Route exact path='/checkout' element={<Checkout />}/>
        </Routes>
    </ThemeProvider>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App
