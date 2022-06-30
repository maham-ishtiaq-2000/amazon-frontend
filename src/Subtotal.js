import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './SubTotal.css';

const SubTotal = () =>{
  let [totalAmount , setTotalAmount] = useState("");
  const user_id = localStorage.getItem("id")
  const moveToPayment = () =>{
    window.location = "/payment"
  }
  useEffect(() => {
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

  console.log(totalAmount)
    return(
        <>
          <div className='main'>
     
                <p>SubTotals (0 items) : <span>{totalAmount}</span></p>
               
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1"> There is a gift in this box</label><br></br>
               
                <button onClick={moveToPayment}>Proceed To CheckOut</button>
          </div>
        </>
    )
}

export default SubTotal;