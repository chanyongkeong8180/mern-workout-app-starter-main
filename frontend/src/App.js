import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import './index.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar';

function App() {
  const {user} = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home/> : <Navigate to="/Login" />}/>
            <Route path="/Login" element={!user ? <Login/>: <Navigate to="/" />}/>
            <Route path="/Register" element={!user ? <Register/>: <Navigate to="/" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
