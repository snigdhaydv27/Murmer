import AuthScreen from "./pages/AuthScreen";
import SignUp from "./pages/SignUp";
import {Routes, Route} from 'react-router-dom';
import { Toaster } from "react-hot-toast";      
import HomePage from "./pages/HomePage"
function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<AuthScreen />} /> 
        <Route path='/signup' element={ <SignUp/>} /> 
        <Route path='/home' element={ <HomePage/>} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
