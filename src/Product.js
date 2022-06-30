import React from 'react';
import './Product.css';
import axios from 'axios'

const Product = (props) =>{
    console.log(props.id)
    var user_id = localStorage.getItem("id")
    console.log(user_id)
    const addToBasket = (event) =>{
        event.preventDefault()
        console.log("ALLAH U AKBAR")
        console.log(props.id)
        if (user_id){
        axios.put(`https://amazon-backend-practice.herokuapp.com/api/amazonUser/add_product_to_basket/${props.id}/${user_id}`)
        .then(response => {
            alert(response.data.message)
            window.location.reload()
        });
    }
    else{
        alert("First Log In to your account")
        window.location = "/login"
    }
    }
    return(
        <>
        <div className='product'>
            <p>{props.descrp}</p> 
            <br></br>
            <p className='price'>$ {props.price}</p>
            <br></br>
            <p>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </p>
            <div className='images-set'>
                <img src={props.url} height="250px"></img>
                <button onClick={addToBasket}>Add to basket</button>
            </div>
            
        </div>
         
        </>

    )
}

export default Product;