import './App.css'
import AppMaestro from './Components/AppMaestro/AppMaestro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Comp from './Components/Comp'
//import ProductViewBig from "../../ProductViewBig/ProductViewBig" <Route exact path="/product/:prodId" element={<ProductViewBig />} />
import ProductViewBig from "./Components/ProductViewBig/ProductViewBig"

function App() {
  

  return (
    <>
      <BrowserRouter>

        <AppMaestro/>

        <Routes>

         <Route exact path='/' element={<ItemListContainer/>}/>
         <Route exact path='/Comp' element={<Comp/>}/>
         <Route exact path="/product/:prodId" element={<ProductViewBig />} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
