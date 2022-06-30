import React from 'react';
import Header from './Header';
import './CheckOut.css';
import SubTotal from './Subtotal';
import CheckOutProduct from './CheckOutProduct';
import './CheckOutProduct.css';

const CheckOut = () => {
  var name = localStorage.getItem("name");
  console.log(name)
  var email = localStorage.getItem("user_email");

  return (
    <>
    {email && <>
        <Header />
       
         <div className='checkOuts'>
         <div className="d-flex flex-row firstOnesss">
           
            <div className="p-2 leftSides">
              Your Shopping Baskets
              <br></br>
              <CheckOutProduct />
              
              </div>
          
          </div>
          <div className="d-flex flex-column-reverse secondOnesss">
        
            <div className="p-2 rightSideOnes">
              <div className='cards'>
                  <p className='leftSides'><SubTotal /></p>
                  <br></br>
                  
              </div>
              
            </div>
         
          </div>
          </div>
       
      
    </>}
   {!email && <h1 style={{"marginLeft" : "30%" , "marginTop" : "18%"}} className='errors'>First Log In into your Amazon Account </h1>}
   
    </>
  )
}

export default CheckOut