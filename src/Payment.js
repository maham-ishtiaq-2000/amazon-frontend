import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import './Payment.css';
import DeliveryProduct from './DeliveryProduct';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
  let [totalAmount , setTotalAmount] = useState("");
  const user_id = localStorage.getItem("id")
  let [checkOutProduct , setCheckOutPoduct] = useState([]);
  var email = localStorage.getItem("user_email");
  useEffect(() =>{
    getCheckOutProducts()
    calculateTotalAmount()
  },[])

  const calculateTotalAmount  = () =>{
            
    axios.get(`https://amazon-backend-practice.herokuapp.com/api/amazonUser/prices_array/${user_id}`)
    .then((response) => {

        if (response.data.success) {
            setTotalAmount(response.data.data)
        }

    })

    .catch(function (error) {

    });
}

  const getCheckOutProducts = () => {
        
    axios.get(`https://amazon-backend-practice.herokuapp.com/api/amazonUser/products_selected_by_single_user/${user_id}`)
        .then((response) => {

            if (response.data.success) {
                setCheckOutPoduct(response.data.data)
            }

        })

        .catch(function (error) {

        });
}
console.log(checkOutProduct.length)
  return (
    <>
    {email && 
        <>
         <Header />
         <h3 className='headings'>CheckOut ({checkOutProduct.length} items)</h3>
         <div className='checkOuts'>
         <div className="d-flex flex-column firstOnes">
            <div className="p-2 leftSides">Delivery Address</div>
          </div>
          <div className="d-flex flex-column-reverse secondOnes">
            <div className="p-2 rightSideOnes">House no 394 , Media Town , Islamabad</div>
          </div>
          </div>
          <div className='checkOuts'>
         <div className="d-flex flex-column firstOnes">
           
            <div className="p-2 leftSides ">Review Items and delivery</div>
          
          </div>
          <div className="d-flex flex-column-reverse secondOnes">
        
            <div className="p-2 rightSideOnes">
              <DeliveryProduct />
            </div>
         
          </div>
          </div>
          <div className='checkOuts'>
         <div className="d-flex flex-column firstOnes">
           
            <div className="p-2 leftSides">Payment Method</div>
          
          </div>
          <div className="d-flex flex-column-reverse secondOnes">
        
            <div className="p-2 rightSideOnes">
              <div className='card'>
                  <p className='leftSides'>Order Total : ${totalAmount}</p>
                  <br></br>
                  <CheckoutForm />
              </div>
              
            </div>
         
          </div>
          </div>
          </>
          
  }
     {!email && <h1 style={{"marginLeft" : "30%" , "marginTop" : "18%"}} className='errors'>First Log In into your Amazon Account </h1>}
    </>
   
  )
}

export default Payment