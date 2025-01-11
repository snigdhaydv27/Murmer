import AuthScreen from "./pages/AuthScreen";
import SignUp from "./pages/SignUp";
import {Routes, Route} from 'react-router-dom';
import { Toaster } from "react-hot-toast";      
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<AuthScreen />} /> 
        <Route path='/signup' element={ <SignUp/>} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  )
}

export default App
