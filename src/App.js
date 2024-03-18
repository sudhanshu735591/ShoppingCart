import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/login';
import SignUp from './component/Signup/signup';



function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
