import AuthScreen from "./pages/AuthScreen";
import { BrowserRouter as Router} from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar"
function App() {
  return (
    <Router>
      <Navbar />
      <AuthScreen />
      <Toaster />
    </Router>
  )
}

export default App
