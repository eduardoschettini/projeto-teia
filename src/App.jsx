import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

import './App.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
