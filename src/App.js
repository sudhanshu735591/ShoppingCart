import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/login';
import SignUp from './component/Signup/signup';
import AddToCart from './component/AddToCart/addToCart';



function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/cart' element = {<AddToCart/>}/>
      </Routes>
    </div>
  );
}

export default App;
