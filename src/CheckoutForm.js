import React,{useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Payment.css';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForms = () => {
  let [productIds , setProductIds] = useState("");
  let user_id = localStorage.getItem("id");
  useEffect(() => {
     calculateCheckOutProducts()
  },[])

  
 
  const calculateCheckOutProducts = () =>{
    
    axios.get(`https://amazon-backend-practice.herokuapp.com/api/amazonUser/products_ids_selected_by_single_user/${user_id}`)
    .then((response) => {

        if (response.data.success) {
            setProductIds(response.data.data)
            
        }

    })

    .catch(function (error) {

    });

  }
  console.log(productIds)
  
  const stripe = useStripe();
  const elements = useElements();

  const checkOutAction = () => {
    axios.put(`https://amazon-backend-practice.herokuapp.com/api/amazonUser/orders_list/${user_id}`)
    .then(response => {
        alert("Check Out completed")
    }).catch((e) => {
      console.log(e)
    });
    window.location = "/"
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

  };

  return (
    <form >
      <CardElement />
      <br></br>
      <button   className="pay" onClick={checkOutAction}>
        Buy Now
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const CheckoutForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForms />
  </Elements>
);

export default CheckoutForm;
