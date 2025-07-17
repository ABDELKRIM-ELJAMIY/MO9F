

import './App.css'
import HomePage from './pages/public/HomePage'
import RegistrationForms from './pages/public/RegistrationForms'
import NotFound from './pages/public/NotFound'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar/>
      <HomePage />

     
      <RegistrationForms/>
      <NotFound/>
      
    </>
  )
}

export default App
