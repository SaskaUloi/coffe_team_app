import NavBar from './Components/NavBar';
import { Route, Routes} from "react-router-dom"
import LoginPage from './Components/Pages/LoginPage';
import SignUpPage from './Components/Pages/SignUpPage';

function App() {
   return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </>
    
  )
}

export default App;
