import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import CheckOut from './CheckOut';
import Login from './Login';
import Payment from './Payment';
import Order from './Order';
import SignUp from './SignUp';

function App() {
  return (
    <>
   
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path="/orders" element={<Order />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
       </Routes>
     
        
    </>
  );
}

export default App;
