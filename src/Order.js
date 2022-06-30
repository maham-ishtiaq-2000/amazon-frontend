import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import CheckOutProduct from './CheckOutProduct';
import './Order.css';

const Order = () => {
  let user_id = localStorage.getItem("id");
  let [checkOutProduct,setCheckOutProduct] = useState([])
  useEffect(() => {
    checkOutProductList()
  },[])

  const checkOutProductList = () =>{
   
    axios.get(`https://amazon-backend-practice.herokuapp.com/api/amazonUser/orders_list/${user_id}`)
        .then((response) => {

            if (response.data.success) {
                setCheckOutProduct(response.data.data)
            }

        })
  
        .catch(function (error) {

        });
  }

  console.log(checkOutProduct)

  return (
    <>
      <Header />
      <div className='orders'>
          <h2 className='headingss'>Your Orders</h2>
          {checkOutProduct.map((item) => {
            return(
              <>
                  <div className='checkoutproducts'>
                      
                      <img src={item.url} width="100px" height="250px"></img>
                  
                  <div className='texts'>
                      <p className='descs'>
                      {item.description}
                      </p>
                      <p className='prices'>
                      $ {item.price}
                      </p>
                      <br></br>
                      <p>
                  <span class="fa fa-star checked" style={{"marginLeft" : "2.5%"}}></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </p>
                  
                  </div>

    </div>
              </>
            )
          })}
          
      </div>
    </>


  )
}

export default Order;