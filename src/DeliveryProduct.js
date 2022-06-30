import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './DeliveryProduct.css';

const DeliveryProduct = () => {
  
  let [checkOutProduct , setCheckOutPoduct] = useState([]);
  const user_id = localStorage.getItem("id")
  console.log(user_id)
  useEffect(() =>{
    getCheckOutProducts()
  },[])
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
const removeFromBasket = (val) =>{
  console.log(val)
  console.log("ALLAH U AKBAR")
  
  axios.put(`https://amazon-backend-practice.herokuapp.com/api/amazonUser/remove_product_from_basket/${val}/${user_id}`)
  .then(response => {
    alert(response.data.message)
    window.location.reload()
  });
}
console.log(checkOutProduct)



  return (
    <>
    {checkOutProduct.map((item) => {
      return(
        <div className='checkoutproduct'>
            
                <img src={item.url} width="150px" height="250px"></img>
            
            <div className='text'>
                <p className='desc'>
                {item.description}
                </p>
                <p className='price'>
                $ {item.price}
                </p>
                <br></br>
                <p>
            <span class="fa fa-star checked" style={{"marginLeft" : "15%"}}></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </p>
            <button onClick={()=>{removeFromBasket(item.product_id)}}>Remove from basket</button>
            </div>

        </div>
      )
    })}
     
    </>
  )
}

export default DeliveryProduct;