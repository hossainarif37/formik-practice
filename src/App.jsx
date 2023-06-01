import './App.css'
import Navbar from './Shared/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='font-mono'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
