import './App.css'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import Product from './components/Product'
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
function App() {
  
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element ={<Dashboard/>}></Route>
      <Route path="/cart" element ={<Cart/>}></Route>
    </Route>
  ))
  return (
     <div className="center-container">
     <RouterProvider router ={router}/>
     </div>
  )
}

export default App
